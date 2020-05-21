<?php
    $dbhost="localhost";
    $username="root";
    $password="";
    $dbname="englishgrammar";

    $con = mysqli_connect($dbhost,$username,$password,$dbname);

    if(mysqli_connect_errno()){
        die('Database connection failed'.mysqli_connect_error());
    }
?>