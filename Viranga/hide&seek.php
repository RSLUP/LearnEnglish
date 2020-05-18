<!-- php add -->

<?php
	session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Hide & Seek</title>

   
    <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap"
        rel="stylesheet"
    />
    <script src="https://kit.fontawesome.com/717367e0a7.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="games/css/hide&seek.css">
   
    
</head>
    <body>
        <?php
			if(!isset($_SESSION['userName'])){
				header("location: login.php?Error=notLogging");
			}
		?>
    <header class="myHeader">
			
			<div class="logo-container">
				<img src="./img/le-logo.png" alt="logo" onclick="mainPage()" />
				
				

				<h4><a  class="logo" href="index.php">LearnEnglish</a> </h4>
			</div>

			<nav>
				<ul>
					<li><a href="index.php">Home</a></li>
					
					<li><a href="#">Learn more <i class="fa fa-caret-down"></i></a>
						<ul>
							<li><a href="speech.php">&#10097 8 Parts of Speech</a></li>
							<li><a href="tenses.php">&#10097 12 Verb Tenses</a></li>
								
						</ul>
					</li>

					<li><a href="#">Take a Quiz <i class="fa fa-caret-down"></i></a>
						<ul>
							<li><a href="quiz-speech.php">&#10097 Quiz on 8 Parts of Speech</a></li>
							<li><a href="quiz-tenses.php">&#10097 Quiz on 12 Verb Tenses</a></li>
								
						</ul>
					</li>
		
					<li><a href="#">Games <i class="fa fa-caret-down"></i></a>
						<ul>
							<li><a href="hide&seek.php">&#10097 Hide & Seek</a></li>
							<li><a href="catch-eggs.php">&#10097 Catch Eggs</a></li>
						</ul>
					</li>
				</ul>
				




			</nav>





			<div class="avatar">
				<i class="fas fa-user" onclick="profile()"><span class="display-label">Profile</span></i>
				<form action="logout.inc.php" method="post">
					<button type="submit"><i class="fas fa-sign-out-alt"><span class="display-label" name="logout">Log Out</span></i></button>
				</form>
			</div>
		</header>

        <button onclick="topFunction()" id="myBtn" title="Go to top"><i class="fas fa-angle-up"></i></button>
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
        
        
        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />

        <section class="profile-details">
			<div class="profile-outer">
				<div class="close">
					<i class="fas fa-times" onclick="exitUd()"></i>
				</div>
				<div class="profile-container">
					
					<img class="p-img" src="./img/profile.svg" alt="">
					<div class="profile-cont">
						<h1>Hi, <?php echo ($_SESSION['userName']); ?></h1>
						<br>
						<img class="profile-img" src="./img/avatar.png" alt="avatar" />
						
						<h4>Name : <?php echo ($_SESSION['userName']); ?></h4>
						<h4>Email : <?php echo ($_SESSION['userMail']); ?></h4>
						<!-- <h4>Logging Time : <span class="utime"></span></h4> -->
					</div>
					
				</div>
				
			</div>
			
		</section>
        <div class="start hide">
            <div class="frame">Try to match <span>part of speech</span> with it's example
                <br>
                <br>
                <button class="btn" onclick="getStart()">Start</button>
            </div>
            
            
        </div>
        <div class="game-title">Hide & <span>Seek</span> v1.0</div>
        <div id="gameInfoBlock" class="game-info-block">
            <div class="game-info">
                Timer :  <span class="time"></span>                  
            </div>
        </div>
                <!--add section-->
            <section class="memory-game">
                <div class="memory-card" data-card="verb">
                    <img class="front-face word" src="games/img/verb.png" alt="verb">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>
                <div class="memory-card" data-card="verb">
                    <img class="front-face select" src="games/img/catch.png" alt="catch">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>

                <div class="memory-card" data-card="pronoun">
                    <img class="front-face word" src="games/img/pronoun.png" alt="pronoun">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>
                <div class="memory-card" data-card="pronoun">
                    <img class="front-face select" src="games/img/them.png" alt="them">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>

                <div class="memory-card" data-card="conjunction">
                    <img class="front-face word" src="games/img/conjun.png" alt="conjun">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>
                <div class="memory-card" data-card="conjunction">
                    <img class="front-face select" src="games/img/for.png" alt="for">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>

                <div class="memory-card" data-card="preposition">
                    <img class="front-face word" src="games/img/prepo.png" alt="prepo">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>
                <div class="memory-card" data-card="preposition">
                    <img class="front-face select" src="games/img/after.png" alt="after">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>

                <div class="memory-card" data-card="adjectives">
                    <img class="front-face word" src="games/img/adjec.png" alt="adjec">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>
                <div class="memory-card" data-card="adjectives">
                    <img class="front-face select" src="games/img/funny.png" alt="funny">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>

                <div class="memory-card" data-card="adverbs">
                    <img class="front-face word" src="games/img/adveb.png" alt="adveb">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>
                <div class="memory-card" data-card="adverbs">
                    <img class="front-face select" src="games/img/fast.png" alt="fast">
                    <img class="back-face" src="games/img/le-logo.png" alt="front face">
                </div>
                
            </section>
            <div class="timeOut">
                <div class="box">
                    <h1>Time Out...!<br>
                        Let's try Again
                    </h1>
                    <br>
                    <button class="btn" onclick="tryAgain()">Try Again</button>
                </div>
            </div>

            <div class="winText">
                <div class="box">
                    <h1>Well Done <span class="profile"></span>..!<br></h1>
                    
                    <h1>YOU WON</h1>
                    <p>You Have awesome memory and knowledge</p>
                    
                    <br>
                    <button class="btn" onclick="tryAgain()">Play Again</button>
                    <br>
                    <button class="btn" onclick="home()">Home</button>
                    
                </div>
            </div>





            <br>
            <br>
            <br>

        <button class="btn" onclick="tryAgain()">RESET</button>
        
        <footer class="footer">
            <p><i class="far fa-copyright"></i> Copyrights Reserved | LearnEnglish </p>   
        </footer> 
        <!--import js file-->
        
        <script src="games/js/hide&seek.js"></script>
        <script type="text/javascript" src="javascript/script.js"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.3/jquery.sticky.min.js'></script>
        
        
    </body>
</html>