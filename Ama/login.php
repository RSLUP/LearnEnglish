<?php
include('session.php'); // Includes session Script
if(isset($_SESSION['login_user'])){
header("location: EnglishHub.php"); // Redirecting To home Page
}
?>
<html>
    <head>
        <title>Login-EnglishHub</title>
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
                    <img src="img/login.png" width="700" height="500">

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
                          <input type = "submit"  name = "btnSubmit" class = "button" value = "LOGIN">                       
                          </div>
                          <div>
                            <br><center>Don't have an account? <a href="#">Sign Up</a></center>
                          </div>
                        </form>
                      </div>
                </td>
            </tr>
        </table>
       <div id="log"></div>
    </body>
</html>