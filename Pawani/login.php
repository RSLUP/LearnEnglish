
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="css/login_style.css">
</head>
<body>

<?php
// define variables and set to empty values
$Message = $ErrorUname = $ErrorPass = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = check_input($_POST["username"]);

    if (!preg_match("/^[a-zA-Z0-9_]*$/",$username)) {
        $ErrorUname = "Space and special characters not allowed but you can use underscore(_).";
    }
    else{
        $fusername=$username;
    }

    $fpassword = check_input($_POST["password"]);

    if ($ErrorUname!=""){
        $Message = "Login failed! Errors found";
    }
    else{
        include('conn.php');

        $query=mysqli_query($conn,"select * from `loginform` where User='$fusername' && Password='$fpassword'");
        $num_rows=mysqli_num_rows($query);
        $row=mysqli_fetch_array($query);

        if ($num_rows>0){
            $Message = "Login Successful!";
        }
        else{
            $Message = "Login Failed! User not found";
        }

    }
}

function check_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>

<!--<h2>Login Form</h2>-->
<!--<p><span class="message">* required field.</span></p>-->
<!--<form id="login_form" name="login_form" method="POST" action="conn.php">-->

    <form id="login_form" name="login_form"  method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

        <img src="images/login_back.jpg" id="login_img" alt="">
        <h1 id="login_topic">LOG IN</h1>
        <div id="label_div">
<!--            <input id="un" type="text" name="username" placeholder="username">-->
            Username:<input id="un" type="text" name="username" required>
            <span class="message">* <?php echo $ErrorUname;?></span>
            <br><br>
<!--            <input id="pw" type="password" name="password" placeholder="password">-->
                Password: <input id="pw" type="password" name="password" required>

            <span class="message">* <?php echo $ErrorPass;?></span>
            <br><br>
<!--            <button id="login_button" type="button" onclick="">Login</button>-->
            <input id="login_button" type="submit" name="submit">

        </div>
</form>



<!--<form method="post" action="--><?php //echo htmlspecialchars($_SERVER["PHP_SELF"]);?><!--">-->
<!--    Username:<input type="text" name="username" required>-->
<!--    <span class="message">* --><?php //echo $ErrorUname;?><!--</span>-->
<!--    <br><br>-->
<!--    Password: <input type="password" name="password" required>-->
<!--    <span class="message">* --><?php //echo $ErrorPass;?><!--</span>-->
<!--    <br><br>-->
<!--    <input type="submit" name="submit">-->
<!--    <br><br>-->
<!--</form>-->

<span class="message">
<?php
if ($Message=="Login Successful!"){
    ?>
    <script>
                window.alert('Login Success,');
                window.location.href='index.html';
    </script>
    <?php
}
else{
    echo $Message;
}

?>
</span>

</body>
</html>
