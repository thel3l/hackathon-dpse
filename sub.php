<?php

$name = $_POST["name"];
$email = $_POST["email"];
$ip = $_SERVER['REMOTE_ADDR'];
$date = date("d-m-Y");
echo "$name, $email, $ip, $date";

$servername = getenv('IP');
$username = getenv('C9_USER');
$password = "";
$database = "dpse";
$dbport = 3306;


// Create connection
$db = new mysqli($servername, $username, $password, $database, $dbport);


if(!$result = $db->query("INSERT INTO `subs`(`Name`, `Email`, `Date`, `IP`) VALUES ($name,$email,$date,$ip)")){
    die('There was an error running the query [' . $db->error . ']');
}
var_dump($result);


?>