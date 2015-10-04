<?php

$name = $_POST["name"];
//$name = "nammmmee";                       DEBUG VARIABLE
$email = $_POST["email"];
//$email = "emmmmaaiiill";                  DEBUG VARIABLE
$ip = $_SERVER['REMOTE_ADDR'];
$date = date("d-m-Y");
//echo "$name, $email, $ip, $date";

$servername = getenv('IP');
$username = getenv('C9_USER');
$password = "";
$database = "dpse";
$dbport = 3306;


// Create connection
$db = new mysqli($servername, $username, $password, $database, $dbport);

$query = "INSERT INTO `subs` (`Name`, `Email`, `Date`, `IP`) VALUES ('".$name."','".$email."','".$date."','".$ip."')";

echo "query: ".$query."<br>";

if(!$result = $db->query($query)){
    die('There was an error running the query [' . $db->error . ']');
}

var_dump($result);


?>