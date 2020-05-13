<?php


   session_start();
   $error = '';

   if (isset($_POST["btnSubmit"]))
   {
   	if (empty($_POST["txtUsername"]) || empty($_POST["txtPassword"]))
   	{
   		$error = "Enter login details";
   	}
   	else
   	{
   		$username = $_POST["txtUsername"];
   		$password = $_POST["txtPassword"];
         

   		$conn = mysqli_connect("localhost","root","","learnenglish");
   		$query = "select username, password from user where username ='$username' and password ='$password' limit 1";

   			$stmt = $conn->prepare($query);
   			$stmt->execute();
   			$stmt->bind_result($username, $password);
   			$stmt->store_result();

   		if($stmt->fetch())
   		{
   			$_SESSION['login_user'] = $username;
   			header("location:englishIndex.php");
   		}
         else
         {
			$error = "Username or Password is Invalid!";
			echo"<script type='text/javascript'> alert ('Username or Password is Invalid!');</script>";
         }
   		
		mysqli_close($conn); 
   	}
   } 
 ?>