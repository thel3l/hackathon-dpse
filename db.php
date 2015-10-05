<?php
$servername = getenv('IP');
$username   = getenv('C9_USER');
$password   = "";
$database   = "dpse";
$dbport     = 3306;

$db    = new mysqli($servername, $username, $password, $database, $dbport);
$base_url='https://quadricfusion-rithvikvibhu.c9.io/hackathon-dpse/activate.php';
?>
