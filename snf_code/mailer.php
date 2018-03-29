<?php
/**
 * Created by PhpStorm.
 * User: ashwi
 * Date: 3/27/2018
 * Time: 2:49 PM
 */

    $toEmail = "payal22k@gmail.com";
    $mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
    if(mail($toEmail, $_POST["ph_num"], $mailHeaders)) {
        print "<p class='success'>Mail Sent.</p>";
        alert('mail sent');

    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
        alert('error');

    }
?>