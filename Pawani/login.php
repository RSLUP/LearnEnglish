
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <link rel="stylesheet" href="css/login_style.css">
</head>

<body>

        <form id="login_form" name="login_form" method="POST" action="log.php">


        <img src="images/login_back.jpg" id="login_img" alt="">
        <h1 id="login_topic">LOG IN</h1>
        <div id="label_div">
            <input id="un" type="text" name="username" placeholder="username">
            <span class="message"></span>
            <br><br>
            <input id="pw" type="password" name="password" placeholder="password">
            <br><br>
            <button id="login_button" type="button" onclick="">Login</button>
        </div>
</form>
</span>



    <script src="js/login_script.js"></script>
</body>
</html>