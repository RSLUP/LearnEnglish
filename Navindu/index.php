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

				<form action="index01.php" class="loginform">

					<h2 class="logintitle">Member Login</h2>
					<div class="inputbox" >
						<img class="iconmail" width="20px" src="img/email.png" alt="email">
						<input class="input" type="text" name="email" placeholder="Email">
					</div>
					<div class="inputbox" >
						<img class="iconpassword" width="20px" src="img/password.png" alt="password">
						<input class="input" type="password" name="pass" placeholder="Password">
					</div>
					<div class="errormsg">
						<p id="Error"></p>
					</div>
					<div class="btnarea">
						<button type="button" class="loginbtn" onclick="redirect(this.form)" id="loginBtn">Login</button>
					</div>

				</form> <!--Login form-->

			</div>
		</div>

        <script type="text/javascript" src="js/index00login-script.js"></script>

    </body>
</html>