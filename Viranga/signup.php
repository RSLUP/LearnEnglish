<?php
    session_start();
    $_SESSION['message'] = '';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnEnglish-SignUp</title>
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

                <img src="img/signin.svg">
                
            </div>
            
            <div class="login-container">
                <div class="form2">
                    <!-- action="speech.html" -->
                    <form action="signup.inc.php" method="post"> 

                        <img src="img/avatar.png" class="avatar">
                        
                        <h2>Signup</h2>
                        <br>
                        <div class="input-div one">
                                <div class="in">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div>
                                    <h5>Username</h5>
                                    <input class="input txtuser" type="text" name="user" required>
                                </div>
                        </div>



                        <div class="input-div one">
                            <div class="in">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <input class="input txtuser" type="email" name="email" required>
                            </div>
                        </div>

                        

                        <div class="input-div two">
                            <div class="in">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input class="input txtpass" type="password" name="pwd" required>
                    
                            </div>
                            
                        </div>

                        <div class="input-div two">
                            <div class="in">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Repeat Password</h5>
                                <input class="input txtpass" type="password" name="pwd_repeat" required>
                                <div class="eye">
                                    <i class="fas fa-eye"></i>
                                </div>
                            </div>
                            
                        </div>


                        <button type="submit" class="btn submit" name="signup">Signup</button>
                        <br>

                        <div class="errorMsg">
                            <?=$_SESSION['message']?>
                        </div>



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

