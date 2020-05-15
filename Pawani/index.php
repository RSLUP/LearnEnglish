<!DOCTYPE html>
<html>
<head>
    <title>login</title>
    <link rel="stylesheet" href="css/login_style.css">
</head>
<body>
<div class="container">
    <div id="login_form" class="well">
        <form method="POST" action="login.php">
        <img src="images/login_back.jpg" id="login_img" alt="">
        <h1 id="login_topic">LOG IN</h1>
        <div id="label_div">
            Username:<input id="un" type="text" name="username" required>
            <br><br>
            Password: <input id="pw" type="password" name="password" required>
            <br><br>
            <input id="login_button" type="submit" name="submit">

        </div>
        </form>

        <div style="height: 15px;"></div>
        <div style="color: red; font-size: 15px;">
                <?php
                session_start();
                if(isset($_SESSION['msg'])){
                    echo $_SESSION['msg'];
                    unset($_SESSION['msg']);
                }
                ?>
        </div>
    </div>
</div>
</body>
</html>