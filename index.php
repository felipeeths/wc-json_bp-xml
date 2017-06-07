<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="assets/js/jquery.min.js"> </script>
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <title>Json - Converter</title>
  </head>
  <body>

      <form class="" style="width: 50%; padding:100px" method="post">
        <div class="form-group">
          <!-- <label for="geturl">URL</label> -->
          <input type="text" class="form-control" name="" id="urljson" value="" placeholder="URL">
        </div>
        <div class="form-group">
          <!-- <label for="geturl">URL</label> -->
          <input type="text" class="form-control" name="" id="ck" value="" placeholder="Client Key">
        </div>
        <div class="form-group">
          <!-- <label for="geturl">URL</label> -->
          <input type="text" class="form-control" name="" id="cs" value="" placeholder="Client Secret Key">
        </div>
        <div class="form-group">
          <!-- <label for="geturl">URL</label> -->
          <input type="text" class="form-control" name="" id="comando" value="" placeholder="Comando">
        </div>
        <button class="btn btn-primary" type="submit">Gerar XML</button>
      </form>
    </div>

    <!-- <div class="profile">
    <table id= "userdata" border="2">
      <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Short</th>
      </thead>
      <tbody>

      </tbody>
    </table>
    </div> -->
  </body>
  <?php include'getjson.php'; ?>
  <script type="text/javascript" src="fileconvert.js"></script>
</html>
