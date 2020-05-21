<?php
    require_once('loginprocess.php');

    $gamer = $_SESSION['uname'];
    $score = $_POSTG['userscore'];

    $query2 = "INSERT INTO game (username, score)
            VALUES ('$gamer','$score')";

    $result2=mysqli_query($con,$query2);
    if($result2){
        header('Location: ../index03-game.php');
    }
?>