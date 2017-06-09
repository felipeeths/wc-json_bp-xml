$(document).ready(function () {
    $('#form').on('submit', function(e) {
        e.preventDefault();

        $("#loading").removeClass("hide");

        $.ajax({
            url : "getProductsWoo.php",
            type: "POST",
            data: {
              'url': $("#url").val(),
              'ck': $("#consumerKey").val(),
              'cs': $("#consumerSecretKey").val(),
              'cmd': $("#cmd").val().replace(/&/g, '\&')
            },
            success: function (data) {

              var xmlFile = new Blob([convertWooToBuscape(JSON.parse(data))], { type: 'text/xml' });

              $("#download").attr("href", window.URL.createObjectURL(xmlFile));
              $("#loading").addClass("hide");
              $("#download").removeClass("hide");

            },
            error: function (jXHR, textStatus, errorThrown) {
                alert("aa" + errorThrown);
            }
        });
    });
});

function convertJSon2XML(json) {
    var x2js = new X2JS();

    var xml = {
      root: json
    };

    return x2js.json2xml_str(xml);
}


function convertWooToBuscape(data) {

  var json = {
    produto: []
  };

  var value = 0;

  $.each(data, function(i, f) {

    var valor_total = parseFloat(f.price);
    var valor_parcela_cartao_3x_sem_juros = valor_total / 3;
    var valor_parcela_cartao_12x_com_juros = valor_total * 0.10040;
    var valor_total_cartao_12x_com_juros = valor_parcela_cartao_12x_com_juros * 12;
    
    json.produto.push({
      "agrupador" : f.id,
      "titulo" : f.name,
      "descricao" : f.short_description.replace(/"/g,"\'").replace(/&nbsp;/g," "),
      
      "canal_buscape" : {
        "canal_url": f.permalink,
        "valores": {
          "valor" : [
            {"forma_de_pagamento": "cartao_avista",
            "pacelamento": "1x de R$ " + valor_total.toFixed(2),
            "canal_preco": "R$ " + valor_total.toFixed(2) },

            {"forma_de_pagamento": "cartao_parcelado_com_juros",
            "pacelamento": "12x de R$ " + valor_parcela_cartao_12x_com_juros.toFixed(2),
            "canal_preco": "R$ " + valor_total_cartao_12x_com_juros.toFixed(2)},

            {"forma_de_pagamento": "cartao_parcelado_sem_juros",
            "pacelamento": "3x de R$ " + valor_parcela_cartao_3x_sem_juros.toFixed(2),
            "canal_preco": "R$ " + valor_total.toFixed(2)}
          ]
        }
      },

      "id_oferta": "",
      "imagens": {
        "imagem": [{}]
      },
      "categoria": f.categories[0].name,
      "cod_barra": "",
      "disponibilidade": f.stock_quantity,
      "altura": f.dimensions.height,
      "comprimento": f.dimensions.width,
      "largura": f.dimensions.length,
      "peso": f.weight,
      "especificacoes":{
        "especificacao":{}
      },
      "atributos":{
        "atributo":{}
      }
    });

    json.produto[value].imagens.imagem = f.images;

    $.each(json.produto[value].imagens.imagem,function(i,f){
      json.produto[value].imagens.imagem[i] = f.src;
    });

    if(f.attributes.length > 0){
      json.produto[value].especificacoes.especificacao = [f.attributes.length];

      $.each(f.attributes,function(i,f){
        var valor = "";
        $.each(f.options,function(i,ff){
          if(i < (f.options.length-1)){
            valor += ff + "/";
          }
          else {
            valor += ff ;
          }
        });

        var especif = {
          "nome": f.name,
          "valor": valor
        };

        json.produto[value].especificacoes.especificacao[i] = especif;

      });
    }

    value++;
  });

  return convertJSon2XML(json);

};
