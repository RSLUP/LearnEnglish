
<?php

    session_start();

    if(isset($_SESSION["s_id"]))
    {
        header("Location: home.php");
    }
    

    $con=mysqli_connect("localhost","root","","game");

    

    if(isset($_POST["btnLogin"]))
    {
        
        $user=mysqli_real_escape_string($con,$_POST["txtUser"]);
        $pass=mysqli_real_escape_string($con,$_POST["txtPass"]);


        $sql="select * from login where username=? AND password=?";

        $stmt=mysqli_stmt_init($con);

        if(!mysqli_stmt_prepare($stmt,$sql))
        {
            echo"<script>alert('SQL Failed.!');</script>";
        }
        else
        {
            mysqli_stmt_bind_param($stmt,"ss",$user,$pass);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);	
       
       
            $row=mysqli_fetch_row($result); 
       
            if($user==$row[1] && $pass==$row[2])
            { 
                $_SESSION["s_id"]= $row[0];
                header("Location:home.php"); 
            }
            else
            {
                echo"<script>alert('Your email or password incorrect..!!');</script>";
            }
       
        }

        
      

    }

   
  
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="login_style.css" >
</head>
<body>
    <div class="cover">
    <br>
  <br>
  <br>
 
    
        <center><div class="box">

            <form method="post">
            <table align="center" class="tbl">

                <tr>
                    <td align="center" class="login">LOGIN</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td align="left" class="lbl">Username</td>
                </tr>
               
                <tr>
                    <td><input type="text"name="txtUser" class="txt"></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td align="left" class="lbl">Password</td>
                </tr>
                <tr>
                    <td><input type="password" name="txtPass" class="txt"></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td><input type="submit" name="btnLogin" value="Login" class="btn"></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" class="join"><a href="signUp.php" style="text-decoration:none;">Join as new player</a></td>
                </tr>
            </table>
        <form>
        </div></center>
        


    <div>
</body>
</html>

