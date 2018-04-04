<?php
/**
 * Created by PhpStorm.
 * User: ashwi
 * Date: 3/27/2018
 * Time: 2:49 PM
 */
if(isset($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['message'];

    ?>
    Your Name Is: <?php echo $name; ?><br />
    Your Email Is: <?php echo $email; ?><br />
    Your Message Is: <?php echo $msg; ?><br />
    <?php
    die();
}
?>