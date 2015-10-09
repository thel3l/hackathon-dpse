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
$email = $_POST["email"];
$ip    = $_SERVER['REMOTE_ADDR'];
$activation = generateActivationCode();

//Check empty fields
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

include 'db.php'; //Connect to MySql

$insertquery = "INSERT INTO `subs` (`Name`, `Email`, `Date`, `IP`, `Activation`) VALUES ('" . $name . "','" . $email . "',NOW(),'" . $ip . "','" . $activation . "')";
$countquery    = mysqli_query($db, "SELECT ID FROM subs WHERE Email='$email'");

if (mysqli_num_rows($countquery) == 0) {
    
    //Error handling
    if (!$result = $db->query($insertquery)) {
        die('There was an error running the query [' . $db->error . ']');
    }
    
    //Success notification
    if($result == true) {
        echo "Success. Check your mail to activate.";
    } else {
        die( "Sorry, an error occured" );
    };

} elseif (mysqli_num_rows($countquery) == 1) {
    die( "You have already registered." );
}

//Email
$link = "https://quadricfusion-rithvikvibhu.c9.io/sendgrid/sendemail.php?getname=" . $name . "&getemail=" . $email . "&getcode=" . $activation;
$result = file_get_contents($link);

?>