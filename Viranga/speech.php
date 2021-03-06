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
		<title>LearnEnglish - Speech</title>
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

		<main>
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
                
	
			<!--back circles-->
			<img class="big-circle" src="./img/big-eclipse.svg" alt="" />
			<img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
			


			<!--heading content-->
			<section class="presentation">
				<div class="introduction">
					<div class="intro-text">
						<h1>8 PARTS OF SPEECH</h1>
						
						<p>Being able to speak English is not just about being able to communicate with native English speakers, it is the most common second language in the world. Learning English is important as it enables you to communicate easily with your fellow global citizens.</p>
                    </div>
                    
					<!-- <div class="cta">
						<button class="cta-style"  ><a href="speech.html" target ="_blank">8 Parts of Speech</a></button>
						
					</div> -->
				</div>
				<div class="cover">
					<img src="./img/speech.svg" alt="teaching" />
				</div>
            </section>
           
            <!--content-->
			<section class="presentation scroll">
                <div class="cover scroll">
					<img src="./img/think.svg" alt="teaching" />
                </div>
                
				<div class="introduction scroll">
					<div class="intro-text">
						<h1>4 Reasons Why Learning English is so Important </h1>
                        <br>
                            <p>1. English is the Language of International Communication.</p>
                            <p>2. English is the Language of Business.</p>
                            <p>3. Speaking English gives you Access to a World of Entertainment.</p>
                            <p>4. Learning English gives you Access to more of the Internet.</p>
                        
						
					</div>
				</div>
                
          
            </section>

              <!--content menu-->
            <section class="presentation scroll">

                

                <div class="introduction scroll">
					<div class="intro-text">
						<h1>So, these are the fundamentals you should know. </h1>
                        <div class="cover">
                            <img src="./img/simple-t.svg" alt="run fast" />
                        </div>
					</div>
				</div>
				<div class="introduction scroll">
					<div class="intro-text">
					
                        <button class="cta-style"><a href ="#Nouns">Nouns <i class="fas fa-angle-right"></i></a></button>
                        <button class="cta-style"><a href ="#Pronoun">Pronoun <i class="fas fa-angle-right"></i></a></button>
                        <button class="cta-style"><a href ="#Verbs">Verbs <i class="fas fa-angle-right"></i></a></button>
                        <button class="cta-style"><a href ="#Adjectives">Adjectives <i class="fas fa-angle-right"></i></a></button>
                        <button class="cta-style"><a href ="#Adverbs">Adverbs <i class="fas fa-angle-right"></i></a></button>
                        <button class="cta-style"><a href ="#Articles">Articles <i class="fas fa-angle-right"></i></a></button>
                        <button class="cta-style"><a href ="#Prepositions">Prepositions <i class="fas fa-angle-right"></i></a></button>
                        <button class="cta-style"> <a href ="#Conjunctions">Conjunctions <i class="fas fa-angle-right"></i></a></button>
                        <button class="cta-style"><a href ="#Interjections">Interjections <i class="fas fa-angle-right"></i></a></button>
					</div>
				</div>
            </section>
            
            <hr class="content-hr">

            <!--Noun-->
            <p class="content-hidden"><a target name = "Nouns">agsgd</a></p>
            <section class="presentation scroll">
                <h2>NOUNS <i class="fas fa-angle-right"></i></h2>
				
                <div class="introduction scroll">
					<div class="intro-text">
						
                        <p>A <strong>Noun</strong> is a part of speech that names a person, place, thing, idea, action or quality.</p> 
                        
                    </div>
                    <div class="cover">
                        <img src="./img/sun.svg" alt="sun shine" />
                    </div>
                </div>
                <div class="introduction scroll">
					<div class="intro-text">
                        <h3>Types of Nouns</h3>
                        <p><i class="fas fa-angle-right"></i> Common Noun</p>
                        <p><i class="fas fa-angle-right"></i> Proper Noun</p>
                        <p><i class="fas fa-angle-right"></i> Abstract Noun</p>
                        <p><i class="fas fa-angle-right"></i> Possessive Noun</p>
                        <p><i class="fas fa-angle-right"></i> Collective Noun</p>

                    </div>
                    <br>
                    <div class="intro-text">
                        <h4>Examples</h4>
                        <p>cat, sock, ship, hero, monkey, baby, match and boy etc</p>
                        <br>
                        <p><i class="fas fa-angle-right"></i> The <strong>sun</strong> shines</p>
                        <p><i class="fas fa-angle-right"></i> <strong>Bunny</strong> goes to school</p>
                        

					</div>
                </div>
			</section>



            <hr class="content-hr">

            <!--Pronoun-->
            <p class="content-hidden"><a target name = "Pronoun">agsgd</a></p>
            <section class="presentation scroll">
                <h2>PRONOUN <i class="fas fa-angle-right"></i></h2>
				
                <div class="introduction scroll">
					<div class="intro-text">
						
                        <p>A <strong>Pronoun</strong> is a word that replaces a noun in a sentence. Pronouns are used so that our language is not cumbersome with the same nouns being repeated over and over in a paragraph.</p> 
                    </div>
                    <div class="cover">
                        <img src="./img/her.gif" alt="brushing teeth" />
                    </div>
                </div>
                <div class="introduction scroll">
					<div class="intro-text">
                        <h3>Types of Pronouns</h3>
                        <p><i class="fas fa-angle-right"></i> Personal pronouns (e.g., he, they)</p>
                        <p><i class="fas fa-angle-right"></i> Demonstrative pronouns (e.g., this, these)</p>
                        <p><i class="fas fa-angle-right"></i> Interrogative pronouns (e.g., which, who)</p>
                        <p><i class="fas fa-angle-right"></i> Indefinite pronouns (e.g., none, several)</p>
                        <p><i class="fas fa-angle-right"></i> Possessive pronouns (e.g., his, your)</p>
                        <p><i class="fas fa-angle-right"></i> Reciprocal pronouns (e.g., each other, one another)</p>
                        <p><i class="fas fa-angle-right"></i> Relative pronouns (e.g., which, where)</p>
                        <p><i class="fas fa-angle-right"></i> Reflexive pronouns (e.g., itself, himself)</p>
                        <p><i class="fas fa-angle-right"></i> Intensive pronouns (e.g., itself, himself)</p>

                    </div>
                    <br>
                    <div class="intro-text">
                        <h4>Examples</h4>
                        <p>I, me, mine, myself, she, her, hers, herself, we, us, ours and ourselves etc</p>
                        <br>
                        <p><i class="fas fa-angle-right"></i> <strong>Hansika</strong> is talented student. <strong><em>She</em></strong> worked hard.</p>
                        <p><i class="fas fa-angle-right"></i> <strong>Bunny</strong> brushes <strong><em>her</em></strong> teeth everyday</p>
                        

					</div>
                </div>
			</section>
            
            
            <hr class="content-hr">

            <!--Verbs-->
            

            <p class="content-hidden"><a target name = "Verbs">agsgd</a></p>
            <section class="presentation scroll">
                <h2>VERBS <i class="fas fa-angle-right"></i></h2>
                
                <div class="introduction scroll">
                    <div class="intro-text">
                        
                        <p>A <strong>Verb</strong> is a word or a combination of words that indicates action or a state of being or condition. A verb is the part of a sentence that tells us what the subject performs. Verbs are the hearts of English sentences.</p> 
                    </div>
                    <div class="cover">
                        <img src="./img/eat.gif" alt="eat" />
                    </div>
                </div>
                <div class="introduction scroll">
                    
                    <br>
                    <div class="intro-text">
                        <h4>Examples</h4>
                        <p>run, catch, sing ,swim, dance, eat, drive and walk etc.</p>
                        <p><i class="fas fa-angle-right"></i> We <strong>went</strong> to the market.</p>
                        <p><i class="fas fa-angle-right"></i> You <strong>write</strong> neatly in your notebook.</p>
                        <p><i class="fas fa-angle-right"></i> Bunny <strong>eats</strong> her lunch.</p>
                        <p><i class="fas fa-angle-right"></i> They <strong>thought</strong> about all the prizes in the competition.</p>

                    </div>
                </div>
            </section>



            <hr class="content-hr">

            <!--Adjectives-->
            <p class="content-hidden"><a target name = "Adjectives">agsgd</a></p>
            <section class="presentation scroll">
                <h2>ADJECTIVES <i class="fas fa-angle-right"></i></h2>
                
                <div class="introduction scroll">
                    <div class="intro-text">
                        
                        <p>An <strong>Adjective</strong> describes or modifies noun/s and pronoun/s in a sentence. It normally indicates quality, size, shape, duration, feelings, contents, and more about a noun or pronoun.</p> 
                    </div>
                    <div class="cover">
                        <img src="./img/funny.gif" alt="funny" />
                    </div>
                </div>
                <div class="introduction scroll">
                    <div class="intro-text">
                        <h3>Types of Adjective</h3>
                        <p><i class="fas fa-angle-right"></i> Descriptive Adjectives</p>
                        <p><i class="fas fa-angle-right"></i> Quantitative Adjectives</p>
                        <p><i class="fas fa-angle-right"></i> Proper Adjectives</p>
                        <p><i class="fas fa-angle-right"></i> Demonstrative Adjectives</p>
                        <p><i class="fas fa-angle-right"></i> Possessive Adjectives</p>
                        <p><i class="fas fa-angle-right"></i> Interrogative Adjectives</p>
                        <p><i class="fas fa-angle-right"></i> Indefinite Adjectives</p>
                        <p><i class="fas fa-angle-right"></i> Articles Adjectives</p>
                        <p><i class="fas fa-angle-right"></i> Compound Adjectives</p>

                    </div>
                    <br>
                    <div class="intro-text">
                        <h4>Examples</h4>
                        <p>fast, hungry, funny ,beautiful, crazy, strong etc.</p>
                        <br>
                        <p><i class="fas fa-angle-right"></i> I have a <strong><em>fast</em></strong> car. (The word ‘fast’ is describing an attribute of the car)</p>
                        <p><i class="fas fa-angle-right"></i> I am <strong><em>hungry</em></strong>. (The word ‘hungry’ is providing information about the subject)</p>
                        <p><i class="fas fa-angle-right"></i> They are watching <strong><em>funny</em></strong> videos.</p>
                        <p><i class="fas fa-angle-right"></i> I saw a <strong><em>flying</em></strong> Eagle.</p>

                    </div>
                </div>
            </section>


            <hr class="content-hr">

            <!--Adverbs-->

            <p class="content-hidden"><a target name = "Adverbs">agsgd</a></p>

            <section class="presentation scroll">
                <h2>ADVERBS <i class="fas fa-angle-right"></i></h2>
                
                <div class="introduction scroll">
                    <div class="intro-text">
                        
                        <p>An <strong>Adverb</strong> is a part of speech that provides greater description to a verb, adjective, another adverb, a phrase, a clause, or a sentence.</p>
                        <p>A great way to pick out an adverb from a sentence is to look for the word ending in -ly. Although that's not universally true, it's a great place to start. Also, given their function, these fundamental elements of the English language are usually placed right before or after the verb in the sentence.</p>                    </div>
                    <div class="cover">
                        <img src="./img/fast.gif" alt="run fast" />
                    </div>
                </div>
                <div class="introduction scroll">
                    <div class="intro-text">
                        <h3>Types of Adverbs</h3>
                        <p><i class="fas fa-angle-right"></i> Adverbs of time</p>
                        <p><i class="fas fa-angle-right"></i> Adverbs of manner</p>
                        <p><i class="fas fa-angle-right"></i> Adverbs of degree</p>
                        <p><i class="fas fa-angle-right"></i> Adverbs of place</p>
                        <p><i class="fas fa-angle-right"></i> Adverbs of frequency</p>

                    </div>
                    <br>
                    <div class="intro-text">
                        <h4>Examples</h4>
                        <br>
                        <p><i class="fas fa-angle-right"></i> He swims <strong><em>well</em></strong>.</p>
                        <p><i class="fas fa-angle-right"></i> Bunny runs <strong><em>quickly</em></strong>.</p>
                        <p><i class="fas fa-angle-right"></i> She spoke <strong><em>softly</em></strong>.</p>
                        <p><i class="fas fa-angle-right"></i> James coughed <strong><em>loudly</em></strong> to attract her attention.</p>

                    </div>
                </div>
            </section>

            <hr class="content-hr">


                 <!--Articles-->
            
                 <p class="content-hidden"><a target name = "Articles">agsgd</a></p>

            <section class="presentation scroll">
                <h2>ARTICLES <i class="fas fa-angle-right"></i></h2>
                
                <div class="introduction scroll">
                    <div class="intro-text">
                        
                        <p>An <strong>Article</strong> is a word used to modify a noun, which is a person, place, object, or idea. Technically, an article is an adjective, which is any word that modifies a noun. Usually adjectives modify nouns through description, but articles are used instead to point out or refer to nouns. There are two different types of articles that we use in writing and conversation to point out or refer to a noun or group of nouns: definite and indefinite articles.</p>
                        <h3>Types of Articles</h3>
                        <p><i class="fas fa-angle-right"></i> Indefinite Articles</p>
                        <p><i class="fas fa-angle-right"></i> Definite Articles</p>
                    </div>
                </div>
                <div class="introduction scroll">
                    <div class="intro-text">
                        <h3>Indefinite Article</h3>
                        <p>Indefinite articles are the words 'a' and 'an.' Each of these articles is used to refer to a noun, but the noun being referred to is not a specific person, place, object, or idea. It can be any noun from a group of nouns. </p>
                        
                    </div>
                   
                    <div class="intro-text">
                        <h4>Examples</h4>
                        
                        <p><i class="fas fa-angle-right"></i> <strong>A</strong> Mercedes from the car lot.</p>
                        <p><i class="fas fa-angle-right"></i> <strong>An</strong> event in history.</p>
                
                    </div>
                    <br>

                    <div class="intro-text">
                        <h3>Definite Article</h3>
                        <p>Let's begin by looking at the definite article. This article is the word 'the,' and it refers directly to a specific noun or groups of nouns. </p>
                        
                    </div>
                   
                    <div class="intro-text">
                        <h4>Examples</h4>
                        
                        <p><i class="fas fa-angle-right"></i> <strong>The</strong> freckles on my face.</p>
                        <p><i class="fas fa-angle-right"></i> The</strong> alligator in the pond.</p>
                        <p><i class="fas fa-angle-right"></i> The</strong> breakfast burrito on my plate.</p>
                
                    </div>
                </div>
            </section>


            <hr class="content-hr">

            <!--Preposition-->
            

            <p class="content-hidden"><a target name = "Prepositions">agsgd</a></p>
            <section class="presentation scroll">
                <h2>PREPOSITIONS <i class="fas fa-angle-right"></i></h2>
                
                <div class="introduction scroll">
                    <div class="intro-text">
                        
                        <P>A <strong>Preposition</strong> is a word used to link nouns, pronouns, or phrases to other words within a sentence. They act to connect the people, objects, time and locations of a sentence.  Prepositions are usually short words, and they are normally placed directly in front of nouns.</P>
                        <div class="cover">
                        <img src="./img/with.gif" alt="play football" />
                        </div>
                    </div>
                </div>
                <div class="introduction scroll">
                    <div class="intro-text">
                        <h3>Types of Preposition</h3>
                        <p><i class="fas fa-angle-right"></i> Preposition for Time</p>
                        <p><i class="fas fa-angle-right"></i> Preposition for Place</p>
                        <p><i class="fas fa-angle-right"></i> Preposition for Direction</p>
                        <p><i class="fas fa-angle-right"></i> Preposition for Agent</p>
                        <p><i class="fas fa-angle-right"></i> Preposition for Instruments</p>
                        <p><i class="fas fa-angle-right"></i> Preposition for Phrases</p>


                    </div>
                    <br>
                    <div class="intro-text">
                        <h4>Examples</h4>
                        <br>
                        <p><i class="fas fa-angle-right"></i> I prefer to read <strong><em>in</em></strong> the library.</p>
                        <p><i class="fas fa-angle-right"></i> He climbed <strong><em>up</em></strong> the ladder to get <strong><em>onto</em></strong> the roof.</p>
                        <p><i class="fas fa-angle-right"></i> Please sign your name <strong><em>on</em></strong> the dotted line <strong><em>after</em></strong> you read the contract.</p>
                        <p><i class="fas fa-angle-right"></i> Go <strong><em>down</em></strong> the stairs and <strong><em>through</em></strong> the door.</p>
                        <p><i class="fas fa-angle-right"></i> He swam <strong><em>across</em></strong> the pool.</p>
                        <p><i class="fas fa-angle-right"></i> Bunny plays <strong><em>with</em></strong> her gift.</p>


                    </div>
                </div>
            </section>


            <hr class="content-hr">

            <!--Conjunction-->
            

            <p class="content-hidden"><a target name = "Conjunctions">agsgd</a></p>
            <section class="presentation scroll">
                <h2>CONJUNCTION <i class="fas fa-angle-right"></i></h2>
                
                <div class="introduction scroll">
                    <div class="intro-text">
                        
                        <p>A <strong>Conjunction</strong> is a part of speech that is used to connect words, phrases, clauses, or sentences. Conjunctions are considered to be invariable grammar particle, and they may or may not stand between items they conjoin.</p>
                        <div class="cover">
                        <img src="./img/conj.gif" alt="scared" />
                        </div>
                        <div class="intro-text">
                            <h3>Types of Conjunctions</h3>
                            <p><i class="fas fa-angle-right"></i> Subordinating conjunctions</p>
                            <p><i class="fas fa-angle-right"></i> Coordinating conjunction</p>
                            <p><i class="fas fa-angle-right"></i> Preposition for Direction</p>
                            <p><i class="fas fa-angle-right"></i> Correlative conjunction</p>
                            <p><i class="fas fa-angle-right"></i> Conjunctive adverbs</p>
    
    
                        </div>
                    </div>
                </div>
                <div class="introduction scroll">
                    
                    <br>

                    <div class="intro-text">
                        <h4>Conjunction Rules</h4>
                        <p>There are a few important rules for using conjunctions. Remember them and you will find that your writing flows better:</p>

                        <br>
                        <p><i class="fas fa-angle-right"></i> Conjunctions are for connecting thoughts, actions, and ideas as well as nouns, clauses, and other parts of speech. For example: Mary went to the supermarket <strong>and</strong> bought oranges.</p>
                        <p><i class="fas fa-angle-right"></i> Conjunctions are useful for making lists. For example: We made pancakes, eggs, <strong>and</strong> coffee for breakfast.</p>
                        <p><i class="fas fa-angle-right"></i> When using conjunctions, make sure that all the parts of your sentences agree. For example: “I work busily <strong>yet</strong> am careful” does not agree. “I work busily <strong>yet</strong> carefully” shows agreement.</p>
                       

                    </div>
                    <div class="intro-text">
                        <h4>Examples</h4>
                        <br>
                        <p><i class="fas fa-angle-right"></i> I have two goldfish <strong>and</strong> a cat.</p>
                        <p><i class="fas fa-angle-right"></i> I’d like a bike <strong>for</strong> commuting to work.</p>
                        <p><i class="fas fa-angle-right"></i> Bunny wants to surprise Mat <strong>but</strong> Mat is scared.</p>
                        <p><i class="fas fa-angle-right"></i> My dad always worked hard <strong>so</strong> we could afford the things we wanted.</p>



                    </div>
                   
                </div>
            </section>



            <hr class="content-hr">

            <!--Interjections-->
            <p class="content-hidden"><a target name = "Interjections">agsgd</a></p>
            
            <section class="presentation scroll">
                <h2>INTERJECTIONS <i class="fas fa-angle-right"></i></h2>
                
                <div class="introduction scroll">
                    <div class="intro-text">
                        
                        <P>An <strong>Interjection</strong> is a word or phrase that is grammatically independent from the words around it, and mainly expresses feeling rather than meaning.</P>    
                        <h3>Types of Interjection</h3>
                        <p><i class="fas fa-angle-right"></i> Interjections for Greeting</p>
                        <p><i class="fas fa-angle-right"></i> Interjections for Joy</p>
                        <p><i class="fas fa-angle-right"></i> Interjections for Approval and Praise</p>
                        <p><i class="fas fa-angle-right"></i> Interjections for Surprise</p>
                        <p><i class="fas fa-angle-right"></i> Interjections for Grief/Pain</p>
                        <p><i class="fas fa-angle-right"></i> Interjections for Bidding Farwell</p>
                        <p><i class="fas fa-angle-right"></i> Interjections for Expressing Doubt or Hesitation</p>

                    </div>
                </div>
                
                <div class="introduction scroll">
                    <div class="intro-text">
                        <div class="intro-text">
                            <h4>Examples</h4>
                        </div>
                        
                        

                        <br>
                        <p><i class="fas fa-angle-right"></i> <strong>Hmm</strong> - Can mean you're thinking or hesitating</p>
                        <p><i class="fas fa-angle-right"></i> <strong>Oops</strong> - An exclamation people use when they do something by accident</p>
                        <p><i class="fas fa-angle-right"></i> <strong>Yeah</strong> - Demonstrates a very strong affirmation or approval</p>
                        <p><i class="fas fa-angle-right"></i> <strong>Eww</strong> - Conveys dislike or disgust</p>
                        <p><i class="fas fa-angle-right"></i> <strong>Aah</strong> - Used as a call for help or when someone is scared</p>

                
                      


                    </div>
                   
                </div>
            </section>




            <hr class="content-hr">


            <section class="presentation scroll">
                
                <div class="introduction scroll">
					<div class="intro-text">
						<h1>Would you like to take a Quiz </h1>
                    </div>
                    <div class="cta">
                        <button class="cta-style"><a href="quiz-speech.php">Let's Go <i class="fas fa-angle-double-right"></i></a></button>
                    </div>
                </div>
                
                <div class="cover scroll">
					<img src="./img/quiz.gif" alt="quiz" />
                </div>
                
				
                
          
            </section>
















        </main>
        <footer class="footer">
			<p><i class="far fa-copyright"></i> Copyrights Reserved | LearnEnglish </p>   
		</footer> 
		
		<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
		<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.3/jquery.sticky.min.js'></script>
        
      
        
        <script type="text/javascript" src="javascript/script.js"></script>
        
	</body>
</html>
