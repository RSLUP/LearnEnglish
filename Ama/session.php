<?php
session_start();
$error = '';

if (isset($_POST['btnSubmit']))
{
    if (empty($_POST['txtUsername']) || empty($_POST['txtPassword']))
    {
        $error = "Username or Password is Invalid!";
    }
    else
    {
        $username = $_POST['txtUsername'];
        $password = $_POST['txtPassword'];

        $conn = mysqli_connect("localhost","root","","EnglishHub");
        $query = "select username, password from accounts where username ='$username' and password ='$password' ";

            $stmt = $conn->prepare($query);
            //$stmt->bind_param("ss", $username, $password);
            $stmt->execute();
            $stmt->bind_result($username, $password);
            $stmt->store_result();

        if($stmt->fetch())
        {
            $_SESSION['login_user'] = $username;
            header("location:EnglishHub.php");
        }
      else
      {
         $error = "Username or Password is Invalid!";
      }
        
     mysqli_close($conn); 
    }
} 
?>