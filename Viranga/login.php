<?php

    session_start();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LearnEnglish-Login</title>
        <link rel="stylesheet" type="text/css" href="css/stylelogin.css">
        
    
        <link
                href="https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap"
                rel="stylesheet"
            />
            <script src="https://kit.fontawesome.com/717367e0a7.js" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/a81368914c.js"></script>
        
    </head>
    <body>

        <img class="wave" src="img/wave.png">

        <div class="container">
            <div class="img">

                <img src="img/img.svg">
                
            </div>
            
            <div class="login-container">
                <div class="form2">
                    <!-- action="speech.html" -->
                    <form class="form" action="login.inc.php" method="post"> 
                        <br>
                        <br>

                        <img src="img/avatar.png" class="avatar">
                    
                        <h2>WELCOME</h2>
                        <br>
                        <!-- error message -->
                        <?php
                            if(isset($_GET['error'])){
                                if($_GET['error'] == 'WrongPasswrod'){
                                    echo '<p class="wrongpara">Incorrect Password.. Try Again!</p>';
                                }
                                else if($_GET['error'] == 'NoUserExists'){
                                    echo '<p class="wrongpara">No user exists with this username or email.</p>';
                                    
                                }
                            }
                           
                        ?>
                        <br>
                        <div class="input-div one">
                            <div class="in">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Username / Email</h5>
                                <input class="input txtuser" type="text" name="usermail"  required>
                            </div>
                        </div>

                        <div class="input-div two">
                            <div class="in">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input class="input txtpass" type="password" name="pwd" required>
                                <div class="eye">
                                    <i class="fas fa-eye"></i>
                                </div>
                            </div>
                        </div>
                        <div class="forgetPwd">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" class="btn submit" name="login">login</button>
                        <!-- <button type="button" class="btn submit" onclick="login()">login</button> -->
                        <p class="para message"></p>
                        <br>
                        <p class="signmessage">Don't you have an acoount..? <a href="signup.php"><span class="sign"> Signup</span></a></p>
                        <br>
                    </form>
                    
                </div>
                <!--back circles-->

                <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
                <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
                <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
                

                <!-- letter animation -->
                <div class="animation-area">
                    <ul class="box-area">
                        <li>A</li>
                        <li>L</li>
                        <li>T</li>
                        <li>O</li>
                        <li>W</li>
                        <li>Z</li>
                        <li>R</li>
                    </ul>
                </div>

            </div>
        </div>

        








        <script src="javascript/jquery.min.js"></script>
        <script type="text/javascript" src="javascript/script.js"></script>
        
    </body>
</html>

