<?php

include 'db.php'; //Connect to MySql
$msg = '';

if (!empty($_GET['code']) && isset($_GET['code'])) {
    $code = mysqli_real_escape_string($db, $_GET['code']);
    $c    = mysqli_query($db, "SELECT ID FROM subs WHERE Activation='$code'");
    
    if (mysqli_num_rows($c) > 0) {

        $count = mysqli_query($db, "SELECT ID FROM subs WHERE Activation='$code' and status='0'");
        
        if (mysqli_num_rows($count) == 1) {
            mysqli_query($db, "UPDATE subs SET Status=1 WHERE Activation='$code'");
            $msg = "Your account has been activated!  We'll keep you updated";
        } else {
            $msg = "Your account is already active! We'll keep you updated";
        }
        
    } else {
        $msg = "Wrong activation code.";
    }
    
} else {
    echo "Enter the activation code";
}

echo $msg;

?>
<!--HTML Part -->
