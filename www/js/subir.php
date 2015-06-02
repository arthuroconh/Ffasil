<?php
   $ruta = "imagenes/";
   $a=time();
   $nombre_imagen =$a."unnombre.jpg";
   move_uploaded_file($_FILES["file"]["tmp_name"], $ruta.$nombre_imagen);
?>