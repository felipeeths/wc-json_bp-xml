String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

window.onload = function() {
    $.getJSON('produtosnewexp.json', function(data) {
      var json = {
        produto: []
      };

      var value = 0;
      $.each(data, function(i, f) {

               var tblRow = "<tr>" + "<td>" + f.id + "</td>" +
                "<td>" + f.name + "</td>" + "<td>" + f.price + "</td>" + "<td>" + f.images[0].src + "</td>" + "</tr>"
                
                $(tblRow).appendTo("#userdata tbody");
                json.produto.push({
                  "agrupador" : f.id,
                  "titulo" : f.name,
                  "descricao" : f.short_description.replace(/"/g,"\'").replace(/&nbsp;/g," "),
                  "canal_buscape" : {
                    "canal_url": f.permalink,
                    "valores":{
                      "valor":[{
                        "forma_de_pagamento": "pagseguro",
                        "pacelamento": "",
                        "canal_preco": f.price
                      }]

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

                console.log(JSON.stringify(json.produto[value].descricao));

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


                console.log(json.produto[value]);


                value++;
        });
        console.log(JSON.stringify(json));
    });
  };
