<?php
    
    if(isset($_POST['login'])){


        require 'database.inc.php'; 

        $username = $_POST['usermail'];
        $password = $_POST['pwd'];
        

        if(empty($username) || empty($password)){
            
            header("location: login.php");
            exit();
        }
        else{
            $sql = "SELECT * FROM users WHERE username=? OR email=?;";
            $stmt = mysqli_stmt_init($conn);
            if(!mysqli_stmt_prepare($stmt, $sql)){
                header("location: login.php?error=sqlerror");
                exit();
            }
            else{
                mysqli_stmt_bind_param($stmt, "ss", $username, $username);
                mysqli_stmt_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                
                if($row = mysqli_fetch_assoc($result)){
                    $pwdCheck = password_verify($password, $row['userpwd']);
                    if($pwdCheck == false){
                        header("location: login.php?error=WrongPasswrod&usermail=".$username);
                        exit();
                    }
                    else if($pwdCheck == true){
                        session_start();
                        $_SESSION['userId'] = $row['id'];
                        $_SESSION['userName'] = $row['username'];
                        $_SESSION['userMail'] = $row['email'];


                        header("location: index.php?Login=Success");
                        


                    }
                    else{
                        header("location: login.php?error=WrongPasswrod");
                        exit();
                    }
                }
                else{
                    header("location: login.php?error=NoUserExists");
                    exit();
                }
            }
        }


    }
    else{
        header("location: login.php");
        exit();
    }