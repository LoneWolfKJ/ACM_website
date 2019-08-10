<?php
$host="localhost"; // Host name 
$username="root"; // Mysql username 
$password="root"; // Mysql password 
$db_name="library"; // Database name 
$tbl_name="subs"; // Table name
//$tb2_name="admin";// admin table name

// Connect to server and select databse.
$con=mysqli_connect($host, $username, $password)or die("cannot connect"); 
mysqli_select_db($con,$db_name)or die("cannot select DB");
?>