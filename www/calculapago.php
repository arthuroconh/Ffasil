<?PHP
$json = array(); 
	include 'conexion.php';
	$a=$_POST['fechIni'];
	$b=$_POST['duracion'];
	$t=$_POST['tipo'];
	$d= $_POST['time'];
	$e= $d*$b;
	$f= strtotime("+".$e." day", strtotime($a));
	$f= date('Y-m-j', $f);
	if ($d==7) {
		$tiempo='semana';
	}
	if ($d==1) {
		$tiempo='dia';
	}
	if ($d==30) {
		$tiempo='mes';
	}
	$tip = mysql_query("SELECT * FROM `precios` WHERE `pub_type_id`=$t AND `desc`='$tiempo'");
	$tipo = mysql_fetch_array($tip);
	$precio = $tipo['precio'];
	$pagar = $b * $precio;
	$n=array("$pagar","$f");
	print json_encode($n);
?>