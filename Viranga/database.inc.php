<?php

    // create variables
    $servername = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "loginsystem";

    //create connection
    $conn = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);

    if(!$conn){
        die("Connection failed: ".mysqli_connect_error());
    }