
<?php

    session_start();

   

    $con=mysqli_connect("localhost","root","","game");

    if(isset($_POST["btnLogin"]))
    {
        $user=$_POST["txtUser"];
        $pass=$_POST["txtPass"];



        $sql="select * from login where username='".$user."' AND password='".$pass."' ";

        $result = mysqli_query($con, $sql);	
        $row=mysqli_fetch_row($result); 

        $_SESSION["s_id"]= $row[0];

        if($user==$row[1] && $pass==$row[2])
        {
            header("Location:home.php"); 
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

