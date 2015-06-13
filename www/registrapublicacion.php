<?php
	include 'conexion.php';
	$idusuario = $_POST['idusuario'];
	$tipo = $_POST['tipo'];
	$ubicacion = $_POST['ubicacion'];
	$cate = $_POST['cat'];
	$nombre = $_POST['nombre'];
	$pago= $_POST['pago'];
	$fechIni = $_POST['fechIni'];
	$duracion = $_POST['duracion'];
	$cierreverdad = $_POST['cierreverdad'];
	$imagen = $_POST['nombreimagen'];
	$imagen2 = $_POST['nombreimagen2'];
	$pagina = $_POST['pagina'];
	$nomb = $_POST['nomb'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$update = date("Y-m-d");
	$publicacion="INSERT INTO `publicaciones`(`id`, `user_id`, `tipo`, `ubicacion`, `categoria`, `titulo`, `pag_web`, `monto`, `status`, `fechIni`, `fechFin`, `deleted`, `name`, `phone`, `email`, `img_1`, `img_2`, `created_at`) 
	VALUES ('','$idusuario','Lider','$ubicacion','$cate','$nombre','$pagina','$pago','Pendiente','$fechIni','$cierreverdad','0','$nomb','$phone','$email','$imagen','$imagen2','$update')";
	$insertar=mysql_query($publicacion) or die('No se pudo insertar datos debido a: '. mysql_error());
	$insertar=array();	
	$n = array("$imagen","$imagen2");
	print json_encode($n);
?>