<?php
$json = array(); 
	$conexion=mysql_connect("www.desarrollotricolor.com.ve","desarrol_a","chiquito123.") 
	or die("Problemas en la conexion");
	mysql_select_db("desarrol_seg",$conexion) or
	die("Problemas en la seleccion de la base de datos");
    $nombre= $_POST["nombre"]; 
    $contra= $_POST["contra"];
	$f=mysql_query("SELECT * FROM `usuario` WHERE `cla`=$contra AND `usu`='$nombre'");
	$j=mysql_fetch_array($f);
$cla= $j['cla'];
$usu= $j['usu'];
$n=array("$usu","$cla");
print json_encode($n);
?>