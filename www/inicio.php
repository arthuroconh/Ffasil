<?php
$json = array(); 
	include "conexion.php";
    $nombre= $_POST["nombre"]; 
    $contra= $_POST["contra"];
	$f=mysql_query("SELECT * FROM `usuario` WHERE `password`=$contra AND `username`='$nombre'");
	$j=mysql_fetch_array($f);
$cla= $j['id'];
$usu= $j['username'];
$n=array("$usu","$cla");
print json_encode($n);
?>