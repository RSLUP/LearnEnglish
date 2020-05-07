
<?php

//session_start();

$con=mysqli_connect("localhost","root","","game");

if(isset($_POST["btnLogin"]))
{


    $user=$_POST["txtUser"];
    $pass=$_POST["txtPass"];

    if($user!="" && $pass!="")
    {
        $sql = "insert into login(username,password) values('$user','$pass')";
        
        if(mysqli_query($con,$sql))
        {
            echo "Recordes inserted ..!!";
            header("Location:index.php");
           
        }
        else
        {
          echo"Error".mysqli_error($con);
        }
    }



   

}




?>



<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" type="text/css" href="login_style.css?v=<?php echo time(); ?>" >
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
        </table>
    <form>
    </div></center>
    


<div>
</body>
</html>

