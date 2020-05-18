<?php
include('session.php'); // Includes session Script
if(isset($_SESSION['login_user'])){
header("location: EnglishHub.php"); // Redirecting To home Page
}

$con=mysqli_connect("localhost","root","","EnglishHub");

if($con == false)
{
  die("ERROR: could not connect".mysqli_connect_error());
}

if(isset($_POST["btnsignup"]))
{
    $uname=mysqli_real_escape_string($con,$_POST["txtUsername"]);
    $pass=mysqli_real_escape_string($con,$_POST["txtPassword"]);
   //this function escapes special characters in a string for use in an SQL query, taking into account the current character set of the connection.

   $ph=password_hash($pass,PASSWORD_DEFAULT);
  // echo "password_hash("$pass", PASSWORD_DEFAULT)";

    if($uname!="" && $pass!="")
    {
        $select="select username from EnglisHub where username='".$uname."' ";

        $result= mysqli_query($con, $select);	
        $output=mysqli_fetch_row($result); 

        if($output[0]==0)
        {
            $insert = "insert into accounts(username,password) values('$uname','$ph')";
        
            /*$stmt=mysqli_stmt_init($con);

            if(!mysqli_stmt_prepare($stmt,$sql))
            {
                echo"Something went wrong. Please check";
            }
            else
            {
                mysqli_stmt_bind_param($stmt,"ss",$uname,$ph);
                mysqli_stmt_execute($stmt);

                echo"<script>alert('successfully  signup..!');</script>";
            }*/

            if(mysqli_query($con,$insert))
            {
              echo"Records inserted successfully";
            }
            else
            {
              echo"Error:Couldn't able to execute $insert ".mysql_error($con);
            }         
        }
        else
        {
            echo"Username already exsits.Please give another";
        }

    }
    else
    {
        echo"Please fill all the text boxes";
    }
}
mysqli_close($con);
?>
<html>
    <head>
        <title>Sign-up-EnglishHub</title>
        <link rel="stylesheet" type="text/css" href="css/login.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script type="text/javascript" src="js/javascript.js"> </script>
        <script type="text/javascript" src="js/login.js"></script>

    </head>
    <body onload="preventGoBack()" >
        <br><br><br><br><br><br>
        <table align="center">
            <tr>
                <td width="800">
                    <img src="img/signup.jpg" width="700" height="500">

                </td>
                <td width="800">
                    <div class = "wrap">
                        <form class = "loginForm" name="loginForm" method="POST">
                          <div class = "header">
                            <h2>Login Form</h2>
                            <p>Login to access EnglishHUb</p>
                          </div>
                          <div class = "grp">
                            <input type = "text"  name="txtUsername" class = "input" placeholder="username" id="username">
                          </div >
                          <div class = "grp">
                            <input type = "password" name="txtPassword" class = "input" placeholder="password" name="password">
                          </div>
                           <div class = "grp">
                          <!-- <input type = "submit"  name = "btnSubmit" class = "button" value = "LOGIN" onclick= "return (validate());">  -->  
                          <input type = "submit"  name = "btnsignup" class = "button" value = "SIGN UP">                       
                          </div>
                          <div>
                            <br><center>Already have an account? <a href="login.php">Login</a></center>
                          </div>
                        </form>
                      </div>
                </td>
            </tr>
        </table>
       <div id="log"></div>
    </body>
</html>