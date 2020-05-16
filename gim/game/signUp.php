
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
   

    $hashPwd=password_hash($pass,PASSWORD_DEFAULT);

    if($user!="" && $pass!="")
    {
        $sql_count="select count(login_id) from login where username='".$user."' ";



        $result_count = mysqli_query($con, $sql_count);	
        $row_count=mysqli_fetch_row($result_count); 

        if($row_count[0]==0)
        {
            $sql = "insert into login(username,password) values(?,?)";
        
            $stmt=mysqli_stmt_init($con);

            if(!mysqli_stmt_prepare($stmt,$sql))
            {
                echo"Error";
            }
            else
            {
                mysqli_stmt_bind_param($stmt,"ss",$user,$hashPwd);
                mysqli_stmt_execute($stmt);

                echo"<script>alert('successfully  signup..!');</script>";
            }

           
        }
        else
        {
            echo"<script>alert('Player already signup..!!..Use another name');</script>";
        }

        

    }
    else
    {
        echo"<script>alert('you cannot input null fields..!!');</script>";
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
                <td align="center" class="login">Sign Up</td>
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
                <td><input type="submit" name="btnLogin" value="Sign Up" class="btn"></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
            <td align="center" class="join"><a href="index.php" style="text-decoration:none;">Login</a></td>
            </tr>
        </table>
    <form>
    </div></center>
    


<div>
</body>
</html>

