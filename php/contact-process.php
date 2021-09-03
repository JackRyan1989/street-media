<?php
/*
Credits: Bit Repository
URL: http://www.bitrepository.com/
*/

include dirname(dirname(__FILE__)) . '/config.php';

error_reporting(E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if ($post) {
    include 'functions.php';

    $name = stripslashes($_POST['fullName']);
    $company = stripslashes($_POST['company']);
    $email = trim($_POST['emailAddress']);
    $phone = stripslashes($_POST['phone']);
    $message = stripslashes($_POST['message']);
    $subject = 'Street Media Inquiry';


    $error = '';

    // Check name

    if (!$name) {
        $error .= 'Please enter your name.<br />';
    }

    // Check email

    if (!$email) {
        $error .= 'Please enter an e-mail address.<br />';
    }

    if ($email && !ValidateEmail($email)) {
        $error .= 'Please enter a valid e-mail address.<br />';
    }

    if (!$error) {
        ini_set("sendmail_from", WEBMASTER_EMAIL); // for windows server
        $mail = mail(
            WEBMASTER_EMAIL,
            $subject,
            $message,
            "From: " . $name . " <" . $email . ">\r\n"
                . "Reply-To: " . $email . "\r\n"
                . "X-Mailer: PHP/" . phpversion()
        );


        if ($mail) {
            echo 'OK';
        }
    } else {
        echo '<div class="notification_error">' . $error . '</div>';
    }
}
