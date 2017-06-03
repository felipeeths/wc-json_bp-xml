window.onload = function() {

    $.getJSON('produtosnewexp.json', function(data) {
      var json = {
        produto: []
      };
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
                  "imagens": {
                    "imagem": f.images[0].src
                  },
                   "categoria": f.categories[0].name,
                   "cod_barra": "",
              		 "disponibilidade": f.stock_quantity,
              		 "altura": f.dimensions.height,
              		 "comprimento": f.dimensions.width,
              		 "largura": f.dimensions.length,
              		 "peso": f.weight,
                   "especificacoes":{
                     "especificacao": f.attributes[0]
                   },
                   "atributos":{
                     "atributo":{
                       "nome": "",
                       "valor":""
                     }
                   }
                  });
        });
        console.log(JSON.stringify(json));
    });
  };
