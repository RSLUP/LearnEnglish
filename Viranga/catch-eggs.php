
<?php
	session_start();
?>
<html>

<head>
  <title>Eggs</title>
  <link href="games/css/eggs-style.css" rel="stylesheet" />
  <link
			href="https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap"
			rel="stylesheet"
		/>
		<script src="https://kit.fontawesome.com/717367e0a7.js" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="css/style.css"/>
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



    <main>
      
      
      <!--Animation area-->
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


      
      <!--back circles-->
      <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
      <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
    </main> 




    <div class="container">

      <div id="score_help"> <i class="fas fa-egg" style="color:rgb(255, 255, 255)"></i> : <span id="score">0</span> <br> 
        <i class="fas fa-heart" style="color:rgba(196, 9, 9, 0.829)"></i> : <span id="life"></span> <br> 
        Use mouse to control
      </div>


      
      <div id="branch"></div>

      <div id="hen1" class="hen"></div>
      <div id="hen2" class="hen"></div>
      <div id="hen3" class="hen"></div>

      <div id="egg1" class="egg" data-bullseye='1'><span class="random_letter"></span></div>
      <div id="egg2" class="egg" data-bullseye='2'><span class="random_letter"></span></div>
      <div id="egg3" class="egg" data-bullseye='3'><span class="random_letter"></span></div>

      <div id="cloud1" class="cloud"></div>
      <div id="cloud2" class="cloud"></div>


      <div id="bullseye1" class="bullseye"></div>
      <div id="bullseye2" class="bullseye"></div>
      <div id="bullseye3" class="bullseye"></div>

      <div id="basket">
        <span id="score_1"></span>
      </div>

      <div id="floor"></div>



      <div id="restart_display">
        <h1>Game Over</h1>
        <i class="fas fa-egg" style="color:rgb(255, 255, 255)"></i> : <span id="final_score"></span> <br>
        <button class="restart">Restart</button>
        <!-- <button class="high_score">High Score</button> -->
      </div>
  
    </div>


    
      <!-- php add -->
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



    <script src="games/js/jquery.min.js"></script>
    <script src="games/js/egg-collision_detection.js"></script>
    <script src="games/js/egg-variables.js"></script>
    <script src="games/js/egg-functions.js"></script>
    <script src="games/js/egg-script.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
		<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.3/jquery.sticky.min.js'></script>
		<script type="text/javascript" src="javascript/script.js"></script>
    <footer class="footer">
      <p><i class="far fa-copyright"></i> Copyrights Reserved | LearnEnglish </p>   
    </footer> 
  </body>

</html>