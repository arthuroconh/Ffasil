<?php
	$conexion=mysql_connect("www.desarrollotricolor.com.ve","desarrol_a","chiquito123.") 
	or die("Problemas en la conexion");
	mysql_select_db("desarrol_ffasil",$conexion) or
	die("Problemas en la seleccion de la base de datos");
?>