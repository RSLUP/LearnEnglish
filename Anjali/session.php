<?php
   session_start();
   

   if (isset($_POST["btnSubmit"]))
   {
   	if (empty($_POST["txtUsername"]) || empty($_POST["txtPassword"]))
   	{
		echo"<script type='text/javascript'> alert ('Enter login details!');</script>";
   	}
   	else
   	{
   		$username = $_POST["txtUsername"];
   		$password = $_POST["txtPassword"];
         

   		$conn = mysqli_connect("localhost","root","","english");
   		$query = "SELECT username, password FROM user WHERE username ='$username' AND password ='$password' limit 1";

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
			
			echo"<script type='text/javascript'> alert ('Username or Password is Invalid!');</script>";
         }
   		
		mysqli_close($conn); 
   	}
}
 ?>