window.onload = function() {

    $.getJSON('produtosnewexp.json', function(data) {
      var json = {
        produto: []
      };
      $.each(data, function(i, f) {
               var tblRow = "<tr>" + "<td>" + f.id + "</td>" +
                "<td>" + f.name + "</td>" + "<td>" + f.price + "</td>" + "<td>" + f.images + "</td>" + "</tr>"
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
                  }
                });

    });
    console.log(JSON.stringify(json));
  });

}
