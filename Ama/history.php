<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "EnglishHub";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    session_start();

    $user_check = $_SESSION['login_user'];
    $sql = "SELECT points FROM sudoku where username= '$user_check'";

    $result = $conn->query($sql);

if ($result->num_rows > 0) {
  
   /* echo"<table border='2'>
		<tr>
			<th colspan='5'>Points: <input type='text'></th>
		</tr>";*/

        echo"points: <br><br><br>";
		
    while($row = $result->fetch_assoc()) 
    {
       /* echo"<tr>
				<td height='20'><label>{$row['points']}</label></td>
			
				</tr>";*/
                echo"<label>{$row['points']}</label>";
    }
   

} else {
    echo "0 results";
}
}
//$conn->close();
mysqli_close($conn);

?>

