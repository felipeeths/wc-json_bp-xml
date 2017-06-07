<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/x2js/1.2.0/xml2json.js"></script>
    <script type="text/javascript" src="assets/js/jquery.min.js"> </script>
    <script type="text/javascript" src="fileconvert.js"></script>
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <title>Json - Converter</title>
  </head>
  <body>

  <script type="text/javascript">
    convertWooToBuscape();

  </script>

    <form id="form" style="width: 50%; padding:100px">
      <div class="form-group">
        <!-- <label for="geturl">URL</label> -->
        <input type="text" class="form-control" name="url" id="url" placeholder="URL">
      </div>
      <div class="form-group">
        <!-- <label for="geturl">URL</label> -->
        <input type="text" class="form-control" name="ck" id="ck" placeholder="Client Key">
      </div>
      <div class="form-group">
        <!-- <label for="geturl">URL</label> -->
        <input type="text" class="form-control" name="cs" id="cs" placeholder="Client Secret Key">
      </div>
      <div class="form-group">
        <!-- <label for="geturl">URL</label> -->
        <input type="text" class="form-control" name="cmd" id="cmd" placeholder="Comando">
      </div>
      <button class="btn btn-primary" id="send" name="send" type="submit">Gerar XML</button>
      <button class="btn btn-danger" id="clear" name="clear" type="reset">Limpar</button>
    </form>

  </body>
  


</html>
