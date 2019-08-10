<?php
ob_start();
function sanitize_my_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}

include 'connection.php';
$email = $_POST['email'];
$name = $_POST['name'];
$sql = "SELECT * FROM subs where email='$email'";
$result = mysqli_query($con, $sql);

$secure_check = sanitize_my_email($email);
if ($secure_check == false) {
    echo "Invalid input";
} else { 
    $name = filter_var ($name, FILTER_SANITIZE_STRING);
    $count=mysqli_num_rows($result);
    if($count == 0) {
        $sql = "INSERT INTO subs values('$name', '$email')";
        mysqli_query($con, $sql);
        echo "Sucessfully subscribed";
    } else {
        echo "Already, subscribed";
    }
}
header('Connection: close');
header('Content-Length: '.ob_get_length());
ob_end_flush();
?>