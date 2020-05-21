<?php
    require_once('./components/loginprocess.php');
    if(isset($_SESSION['uname'])){
        header("location: index01.php");
    }
 ?>

<!DOCTYPE html>
<html>
    <head>

	    <title>Login</title>	
    	<link rel="stylesheet" type="text/css" href="css/stylelogin.css">
	</head>

    <body>
		<div class="container">
			<div class="login">

				<div class="loginpic">
					<img src="img/login.png" alt="login">
				</div>

				<form method="POST" action="index.php" name="loginform" class="loginform">

					<h2 class="logintitle">Member Login</h2>
					<div class="inputbox" >
						<img class="iconmail" width="20px" src="img/email.png" alt="Username">
						<input class="input" type="text" name="inputuser" placeholder="Username">
					</div>
					<div class="inputbox">
						<img class="iconpassword" width="20px" src="img/password.png" alt="password">
						<input class="input" type="password" name="inputpass" placeholder="Password">
					</div>
					<div class="errormsg">
						<?php 
							if(isset($errors) && !empty($errors)){
								echo $errors;
							}
						?>
					</div>
					<div class="btnarea">
						<button name="submit" class="loginbtn" id="loginBtn">Login<button>
					</div>

				</form>

			</div>
		</div>
    </body>
</html>