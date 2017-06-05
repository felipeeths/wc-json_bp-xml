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
                  "descricao" : f.short_description,
                  "canal_buscape" : {
                    "canal_url": f.permalink,
                    "valores":{
                      "forma_de_pagamento": "pagseguro",
                      "pacelamento": "",
                      "canal_preco": f.price
                    }
                  },
                  "id_oferta": "",
                  "imagens": [{

                  }],
                   "categoria": f.categories[0].name,
                   "cod_barra": "",
              		 "disponibilidade": f.stock_quantity,
              		 "altura": f.dimensions.height,
              		 "comprimento": f.dimensions.width,
              		 "largura": f.dimensions.length,
              		 "peso": f.weight,
                   "especificacoes":[{
                     "especificacao":{
                       "nome": "",
                       "valor":""
                     }
                   }],
                   "atributos":[{
                     "atributo":{
                       "nome": "",
                       "valor":""
                     }
                   }]
                  });

                $.each(f.images,function(i,f){
                  json.produto[value].imagens.push({
                    "imagem": f.src
                  });
                });

                $.each(f.attributes,function(i,f){
                  var valor = "";
                  $.each(f.options,function(i,f){
                    if(i+1 < f.length){
                      valor += f + "/";
                    }else {
                      valor += f;
                      }
                  });
                  json.produto[value].especificacoes.especificacao.push({
                    "nome": f.name,
                    "valor": valor
                  });
                });

                value++;
        });
        console.log(JSON.stringify(json));
    });
  };
