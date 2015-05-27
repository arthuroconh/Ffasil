<?php
/**
 * Observe que la sal se genera aleatoriamente aquí.
 * No use nunca una sal estática o una que no se genere aleatoriamente.
 *
 * Para la GRAN mayoría de los casos de uso, dejar que password_hash genere la sal aleatoriamente
 */
$opciones = [
    'key' => '0a86e988a62c5898d6d3d7ed39195a61'
];
echo password_hash("clave", PASSWORD_BCRYPT, $opciones)."\n";
?>