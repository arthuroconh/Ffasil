<?php
$json = array(); 
	include "conexion.php";
	$nombre = $_POST['nombre'];
	$contra = $_POST['contra'];
	$carnet = $_POST['carnet'];
	$email = $_POST['email'];
	$usuario = $_POST['usuario'];
	$n=array("$nombre","$apellido","$carnet","$nit","$telefono","$pagina","$postal","$pais","$depart","$direccion");
	print json_encode($n);
?>