<?php
    
    if(isset($_POST['signup'])){


        require 'database.inc.php';
        // create variables
        // $servername = "localhost";
        // $dbusername = "root";
        // $dbpassword = "";
        // $dbname = "loginsystem";

        //create connection
        $conn = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);

        if(!$conn){
            die("Connection failed: ".mysqli_connect_error());
        }

        $username = $_POST['user'];
        $email = $_POST['email'];
        $password = $_POST['pwd'];
        $passwordRepeat = $_POST['pwd_repeat'];


        if($password !== $passwordRepeat){
            header("location: signup.php?error=passwordCheck&user=".$username."&email=".$email);
            exit();
        }

        else{

            $sql = "SELECT username FROM users WHERE username=?";
            $stmt = mysqli_stmt_init($conn);

            if(!mysqli_stmt_prepare($stmt, $sql)){
               header("location: signup.php?error=sqlerror");
               exit();
            }

            else{
                mysqli_stmt_bind_param($stmt, "s", $username);
                mysqli_stmt_execute($stmt);
                mysqli_stmt_store_result($stmt);

                $resultCheck = mysqli_stmt_num_rows($stmt);

                if($resultCheck>0)
                {
                    header("location: signup.php?error=userAlreaadyIn&email=".$email);
                    exit();
                }
                else{
                    $sql = "INSERT INTO users (username, email, userpwd) VALUES (?, ?, ?)";
                    $stmt = mysqli_stmt_init($conn);

                    if(!mysqli_stmt_prepare($stmt, $sql)){
                        header("location: signup.php?error=sqlerror");
                        exit();
                    }
                    else{

                        $hashpassword = password_hash($password, PASSWORD_DEFAULT);
                
                        mysqli_stmt_bind_param($stmt, "sss", $username, $email, $hashpassword);
                        mysqli_stmt_execute($stmt);
                        header("location: login.php?signup=success");
                        exit();
                    }
                }
            }
        }




        mysqli_stmt_close($stmt);
        mysqli_close($conn);

    } 
    else{
        header("location: signup.php");
        exit();
    }

    