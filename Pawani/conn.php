<?php


//MySQLi Procedural
$conn = mysqli_connect("localhost", "root", "", "login_details");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>