
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
            l<table align="center" class="tbl">

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
                    <td><input type="text" name="txtPass" class="txt"></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td><input type="submit" name="btnLogin" value="Login" class="btn"></td>
                </tr>
            </table>
        <form>
        </div></center>
        


    <div>
</body>
</html>

<?php

session_start();

    

?>