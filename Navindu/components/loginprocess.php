<?php
    session_start();
    require_once('connect.php');

    if(isset($_POST['submit'])){
		$errors = '';

        if(!isset($_POST['inputuser']) || !isset($_POST['inputpass'])){
            $errors = 'Username or Password Missing!';
        }

        if(empty($errors)){
            $uname = mysqli_real_escape_string($con, $_POST['inputuser']);
            $pass = mysqli_real_escape_string($con, $_POST['inputpass']);
            $hashed_pass = sha1($pass);

            $query = "SELECT * FROM logininfo 
                        WHERE username = '{$uname}' 
                        AND password = '{$hashed_pass}' 
                        LIMIT 1";

            $result = mysqli_query($con,$query);

            if($result){
                if(mysqli_num_rows($result)==1){
                    $_SESSION['uname'] = $uname;
                    header('Location: ../index01.php');
                }
                else{
                    $errors='Invalid Username / Password!';
                }
            }
            else{
                $errors='Query / Database Error!';
            }
        }
        mysqli_close($con);
    }
?>