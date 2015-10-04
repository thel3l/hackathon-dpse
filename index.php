<?php
include 'db.php';
$msg='';
if(!empty($_POST['email']) && isset($_POST['email']) &&  !empty($_POST['password']) &&  isset($_POST['password']) )
{
// username and password sent from form
$email=mysqli_real_escape_string($connection,$_POST['email']);
$password=mysqli_real_escape_string($connection,$_POST['password']);
// regular expression for email check
$regex = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/';

if(preg_match($regex, $email))
{
$password=md5($password); // encrypted password
$activation=md5($email.time()); // encrypted email+timestamp
$count=mysqli_query($connection,"SELECT uid FROM users WHERE email='$email'");
// email check
if(mysqli_num_rows($count) < 1)
{
mysqli_query($connection,"INSERT INTO users(email,password,activation) VALUES('$email','$password','$activation')");
// sending email
include 'smtp/Send_Mail.php';
$to=$email;
$subject="Email verification";
$body='Hi, <br/> <br/> We need to make sure you exist, and are not a lel-bot. Please verify your email and get started using your Website account. <br/> <br/> <a href="'.$base_url.'activation/'.$activation.'">'.$base_url.'activation/'.$activation.'</a>';

Send_Mail($to,$subject,$body);
$msg= "Registration successful, please activate email.";
}
else
{
$msg= 'The email is already taken, please try new.';
}

}
else
{
$msg = 'The email you have entered is invalid, please try again.';
}

}
// HTML Part
?>
