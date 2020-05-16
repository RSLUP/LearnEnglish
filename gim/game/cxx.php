<?php 

$con=mysqli_connect("localhost","root","","game");

    if(isset($_POST["btn"]))
    {
        $pass=$_POST["txtPass"];

        $sql="select * from login where username='minidu' ";

        $hashPwd=password_hash($pass,PASSWORD_DEFAULT);

        

            $result = mysqli_query($con,$sql);	
        
            $row=mysqli_fetch_row($result); 
        
            if (password_verify($hashPwd, $row[2])) {
                echo 'Password is Success!';
            } else {
                echo 'Invalid password.';
            }
        
    }



?>

<html>
<body>
    <form method="post" enctype="multipart/form-data">
        <input type="text" name="txtPass">
        <br><input type="submit" value="Login" name="btn">
    </from>
</body>
</html>