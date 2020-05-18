<!-- php add -->

<?php
	session_start();
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<link
			href="https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap"
			rel="stylesheet"
		/>
		<script src="https://kit.fontawesome.com/717367e0a7.js" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="css/style.css"/>
		
		<title>LearnEnglish</title>
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
			

			<!--content-->
			<section class="presentation">
				<div class="introduction">
					<div class="intro-text">
						<h1>Welcome to LearnEnglish</h1>
						
						<p>
							Learn English online using our high-quality resources to quickly improve your English.
							<br>
							<br>
							Start by taking our free English test to help you find your level. Then find lessons and resources to improve your English skills. Get more practice to improve your general English.
						</p>
					</div>
					<div class="cta">
						<button class="cta-style"><a href="speech.php">8 Parts of Speech</a></button>
						<button class="cta-style" ><a href="tenses.php">12 Verb Tenses</a></button>
					</div>
				</div>
				<div class="cover fade">
					<img src="./img/index.svg" alt="education" />
				</div>
				
			</section>

	
		</main>
		<!--profile details-->
			
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
		
		<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
		<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.3/jquery.sticky.min.js'></script>
		<script type="text/javascript" src="javascript/script.js"></script>
		
	</body>
</html>
