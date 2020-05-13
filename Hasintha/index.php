<?php
   include("config.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($db,$_POST['userid']);
      $mypassword = mysqli_real_escape_string($db,$_POST['psw']); 
      
      $sql = "SELECT username FROM users WHERE username = '$myusername' and password = '$mypassword'";
      $timestamp = date('Y/m/d H:i:s', time());
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

      
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
        //  session_register("myusername");
        $_SESSION['login_user'] = $myusername;
        $sql = "INSERT INTO usersessions VALUES('$myusername','$timestamp')";
        $result = mysqli_query($db,$sql); 
        header("location: home.html");
      }else {
         $error = "Your Login Name or Password is invalid";
      }
   }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link href='https://fonts.googleapis.com/css?family=Advent Pro' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=ABeeZee' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Lexend Deca' rel='stylesheet'>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LogIn</title>
    <link rel="stylesheet" type="text/css" href="css/login.css">
 
    <script src="js/login.js"></script>
    
</head>
<body oncontextmenu="return false">
    <div class="body"></div>
    <div class="grad"></div>
    <div class="header">
        <div></div>

    </div>

    <br>
    <form action = "" method = "post">
        <div class="loginFrm">
            <label class="ttlLogin">Log-In</label>

            <input class="loginFrmTxt" type="text" placeholder="username" name="userid" id="userIn"><br>
            <input class="loginFrmPsw" type="password" placeholder="password" name="psw" id="pswIn"><br>
            <input class="loginFrmBtn" type="submit" value="Login"/> 
        </div>
    </form>
</body>
</html>