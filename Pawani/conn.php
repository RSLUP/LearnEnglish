<?php


//MySQLi Procedural
$conn = mysqli_connect("localhost", "root", "", "one1");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>