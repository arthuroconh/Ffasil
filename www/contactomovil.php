<?php
$json = array(); 
	include "conexion.php";
	$nombre = $_POST['nombre'];
	$asunto = $_POST['asunto'];
	$email = $_POST['email'];
	$mensaje = $_POST['mensaje'];
	$subject = "Orden de Compra Nro: $_SESSION[orden]";
	require "phpmailer/class.phpmailer.php";
	$error = '';
	$message ="	<h1>Contacto desde la App de ffasil.com</h1><br><br><br>

					<b>Persona o Empresa:</b> $nombre<br><br>	
					<b>Asunto:</b> $asunto<br><br>	
					<b>Mensaje:</b> $mensaje<br><br>	
					";
	if(!$error)
	{
	$mail = new PHPMailer;
	$mail ->Host = "www.ffasil.com";
	$mail ->From = "soporte@ffasil.com";
	$mail ->FromName = "Contacto desde la App de ffasil";
	$mail ->Subject = $subject;
	$mail ->addAddress($email, $nombre);
	$mail ->MsgHTML($message);
	$mail->Send();

	}
	
	$n='enviado';
	print json_encode($n);
?>