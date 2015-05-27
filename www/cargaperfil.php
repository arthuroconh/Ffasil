<?php
$json = array(); 
	include "conexion.php";
    $id= $_POST['id']; 
	$f=mysql_query("SELECT * FROM `usuario` WHERE `id`=$id");
	$j=mysql_fetch_array($f);
	$departamento= $j['state'];
	$d=mysql_query("SELECT * FROM `departamento` WHERE `id`='$departamento'");
	$k=mysql_fetch_array($d);
	$nombre= $j['name'];
	$apellido= $j['lastname'];
	$carnet= $j['id_carnet'];
	$nit= $j['nit'];
	$telefono= $j['phone'];
	$pagina= $j['pag_web'];
	$postal= $j['postal_cod'];
	$pais= $j['pais'];
	$depart= $k['nombre'];
	$direccion= $j['dir'];

	$n=array("$nombre","$apellido","$carnet","$nit","$telefono","$pagina","$postal","$pais","$depart","$direccion");
	print json_encode($n);
?>