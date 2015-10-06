<?php

function generateActivationCode($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

$name = $_POST["name"];
//echo $name;
//$name = "nammmmee";                         // DEBUG VARIABLE
$email = $_POST["email"];
//$email = "rithvikvibhu@gmail.com";                    // DEBUG VARIABLE
$ip    = $_SERVER['REMOTE_ADDR'];
$activation = generateActivationCode();
//echo "$name, $email, $activation";                // DEBUG VARIABLE

if ($name == "" || $email == "" || $name == NULL || $email == NULL) {
    die("Fill up your name and your email");
}

//Validate name
if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
    die("Only letters and white space allowed for name");
}

//Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format");
}

$servername = getenv('IP');
$username   = getenv('C9_USER');
$password   = "";
$database   = "dpse";
$dbport     = 3306;

$db    = new mysqli($servername, $username, $password, $database, $dbport);
$query = "INSERT INTO `subs` (`Name`, `Email`, `Date`, `IP`, `Activation`) VALUES ('" . $name . "','" . $email . "',NOW(),'" . $ip . "','" . $activation . "')";

if (!$result = $db->query($query)) {
    die('There was an error running the query [' . $db->error . ']');
}

if($result == true) {
    echo "Success. Check your mail to activate.";
} else {
    echo "Sorry, an error occured";
}; // DEBUG VARIABLE


//Email
//$link = "https://quadricfusion-rithvikvibhu.c9.io/sendgrid/sendemail.php?getname=" . $name . "&getemail=" . $email . "&getcode=" . $activation;
//$result = file_get_contents($link);

?>