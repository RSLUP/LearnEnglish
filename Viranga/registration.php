<?php

    session_start();
    header('location:login.php'); 

    $con = mysqli_connect('localhost','root','');

    mysqli_select_db($con, 'userregistration');

    $name = $_POST['user'];
    $pass = $_POST['password'];
    $email = $_POST['email'];

    $s ="seletct * from usertable where name = '$name'";

    $result = mysqli_query($con, $s);
    $num = mysqli_num_rows($result);

    if($num == 1){
        echo "Useralreasy in";
    }
    else{
        $reg = "insert into usertabel(name, email, password) values ('$name', '$email', '$pass')";
        mysqli_query($con, $reg);
        echo "Registrsion complete";
    }

    mysqli_close($con);

?>