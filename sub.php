<?php

$name = $_POST["name"];
echo $name;
//$name = "nammmmee";                         // DEBUG VARIABLE   //Vibhu. Maturity.
$email = $_POST["email"];
//$email = "emmmmaaiiill";                    // DEBUG VARIABLE
$ip = $_SERVER['REMOTE_ADDR'];
//echo "$name, $email, $ip";                // DEBUG VARIABLE

if($name == "" || $email == "" || $name == NULL || $email == NULL) {
    die("Fill up your name and your email");
}

//Validate name
if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
    die("Only letters and white space allowed for name");
}

//Validate email
// if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
//     die("Invalid email format");
// }

if(!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)){
    //Error - Invalid Email
    $msg = 'The email you have entered is invalid, please try again.';
}else{
    // Success - Valid Email
    $msg = 'Your account has been made, <br /> please verify it by clicking the activation link that has been sent to your email.';
}

$servername = getenv('IP');
$username = getenv('C9_USER');
$password = "";
$database = "dpse";
$dbport = 3306;

$db = new mysqli($servername, $username, $password, $database, $dbport);
$query = "INSERT INTO `subs` (`Name`, `Email`, `Date`, `IP`) VALUES ('".$name."','".$email."',NOW(),'".$ip."')";

//echo "query: ".$query."<br>";             // DEBUG VARIABLE


$name = mysql_escape_string($_POST['name']);
$email = mysql_escape_string($_POST['email']);


if(!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)){
  // Return Error - Invalid Email
}else{
  // Return Success - Valid Email
}
if(!$result = $db->query($query)){
    die('There was an error running the query [' . $db->error . ']');
}

var_dump($result);                        // DEBUG VARIABLE


?>
