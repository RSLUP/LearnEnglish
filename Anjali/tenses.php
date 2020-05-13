<?php
    include('sessionConfig.php');
    if(!isset($_SESSION['login_user'])){
    header("location:login.php"); // Redirecting To Home Page
    }
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>English Tenses</title>
    <link rel = "stylesheet" type = "text/css" href = "homeEnglish.css"/>
    <link rel = "stylesheet" type = "text/css" href = "tense.css"/>
    <script type="text/javascript" src="javascriptTense.js"> </script>
    <script type="text/javascript" src="javascript.js"> </script>

    
</head>
<body>
    <div class ="pagetitle">
        <nav>
            <a href="englishIndex.php"><h1>LEARN ENGLISH</h1>  </a>  
            <ul>
                <li><a href="englishIndex.php">Home</a></li>
                <li><a href="tenses.php">English Tenses </a></li>   
                <li><a href="login.php">Login </a></li>  
                  
                <li><a href="#" onclick="timeStamp()">profile </a></li> 
            </ul>
         </nav>   
    </div> 
    <div class="tense">
        <span class="tenseTopic">English tenses </span> <br>
        <span class="tenseText"> The term tense is derived from the Latin word ‘Tempus” meaning time. <br>
            Tense is used to indicate time in the English language. <br>
             Here we show examples broadly classified into three groups – Present Tense, Past Tense and Future Tense.</span>
        
      </div>
      <form class="box2">
        <table align="center">
            <tr>
                <td width="400" >
                    <img src="images/past.jpg" height="200" onclick="openFormPast()"class="imagebutton">
                </td>
                
            </tr>
            <tr>
                <td>
                     <img src="images/present.jpg" height="200" onclick="openFormPresent()" class="imagebutton">
                </td>
                
            </tr>
            <tr>
                <td>
                    <img src="images/future.jpg" height="200" onclick="openFormFuture()" class="imagebutton">
                </td>
                
            </tr>  
        </table>
    </form>

    <!--past form box-->
    <div class="form-popup" id="myFormPast">
        <form class="form-container-past">
            <div class ="formtitle">
                <nav>
                    <h1>PAST TENSE</h1>    
                    <ul>
                        <li><a onclick="closeForm()">X</a></li>   
                    </ul>
                 </nav>   
            </div> 
          <table align="center">
              <!--simple past row-->
              <tr>
                  <td width="250" rowspan="2">
                      <br><br><br> <br>
                    <h1 style="font-size: 25px; color: rgb(15, 175, 15);">SIMPLE PAST </h1>
                  </td>
                  <td width="300"  align="justify"rowspan="2">
                    <br><br><br><br>
                    <b>Describes an action that already completed. <br><br>
                    Can be used with or without adverbs of time.</b> 
                  </td>
                  <td width="400" align="justify">
                    &nbsp Examples: <br>
                      <ul>
                          <li><b>I <font style="color: green;">went</font>  to egypt in 1999.</li>
                            <li> He <font style="color: rgb(53, 194, 53);">finished</font> his home work yesterday.</b></li>
                      </ul> 
                  </td>
              </tr>
              <tr>
                  <td><img src="images/simplepast.jpg" class="zoom"> </td>
              </tr>
              <!--past continuous row-->
              <tr>
                <td width="250" rowspan="2" >
                 <h1 style="font-size: 25px; color: rgb(4, 160, 250);"> PAST CONTINUOUS </h1>
                </td>
                <td width="250" rowspan="2" align="justify">
                   <b> Describes presistent habits of the past. <br> <br>
                Express uncompleted action of the past</b>
                </td>
                <td width="400" align="justify">
                    <br><br><br><br><br><br>&nbsp Examples:  <br>
                    <ul>
                        <li><b>They <font style="color: blue;">were</font> always <font style="color: blue;">quarrelling.</font></li>
                        <li>Everyone <font style="color: rgb(16, 69, 216);">was</font> Shouting</b> </li>
                    </ul>
                </td>
              </tr>
              <tr>
                  <td><img src="images/pastcontinous1.jpg" class="zoom"></td>
              </tr>
            <!--past perfect row-->
            <tr>
                <td width="250" rowspan="2">
                    <h1 style="font-size: 25px; color: rgb(226, 43, 202);"> PAST PERFECT </h1>
                </td>
                <td width="250" rowspan="2" align="justify">
                   <b> Describes a completed action of the past that happened before another
                    event took place.</b>
                  </td>
                  <td width="400" align="justify" >
                    <br><br><br><br><br><br> &nbsp Examples:  <br>
                    <ul>
                        <li><b> After he <font style="color: rgb(241, 58, 119);">had finished</font> his homework, he went outside to play.</b></li>
                    </ul>
                  </td>
              </tr>
              <tr>
                  <td><img src="images/pastperfect.jpg" class="zoom"></td>
              </tr>
            <!-- past perfect continuous row-->
            <tr>
                <td width="250" rowspan="2">
                 <h1 style="font-size: 25px; color: coral;"> PAST PERFECT CONTINUOUS </h1>
                </td>
                <td width="250" rowspan="2" align="justify">
                   <b> Describes an action in the past that began before a certain point in the past and continued up until that time.</b>
                  </td>
                  <td width="400" align="justify">
                    <br><br><br><br><br><br>&nbsp Examples:  <br>
                    <ul>
                        <li><b> She <font style="color: rgb(233, 115, 18);">had been working</font> at that company for three years when it went out of business.</b></li>
                    </ul>
                  </td>
              </tr>
              <tr>
                  <td><img src="images/pastperfectcontinous.jpg" class="zoom"></td>
              </tr>
          </table>
        </form>
      </div>

     <!--present form box-->
     <div class="form-popup" id="myFormPresent">
        <form class="form-container-present">
            <div class ="formtitle">
                <nav>
                    <h1>PRESENT TENSE</h1>    
                    <ul>
                        <li><a onclick="closeForm()">X</a></li>   
                    </ul>
                 </nav>   
            </div> 
          <table  align="center">
              <!--simple present row-->
              <tr>
                  <td width="250" rowspan="2">
                      <br><br><br> 
                    <h1 style="font-size: 25px; color: rgb(15, 175, 15);">SIMPLE PRESENT </h1>
                  </td>
                  <td width="300"  align="justify"rowspan="2">
                    <br><br><br> 
                    <b>Express habits or general truth. <br> <br>
                    Describe a future event as part of a plan or arrangement.</b> 
                  </td>
                  <td width="400" align="justify">
                    &nbsp Examples:  <br>
                     <ul><li><b>I <font style="color: green;">am</font> nineteen years old. </li>
                    <li>The plane <font style="color: rgb(19, 189, 19);">arrives</font> at 18.00 tomorrow.</b> </li>
                    </ul>       
                  </td>
              </tr>
              <tr>
                  <td><img src="images/simplepresent.jpg" class="zoom"> </td>
              </tr>
              <!--present continuous row-->
              <tr>
                <td width="250" rowspan="2" >
                 <h1 style="font-size: 25px; color: rgb(4, 160, 250);"> PRESENT CONTINUOUS </h1>
                </td>
                <td width="250" rowspan="2" align="justify">
                   <b> Describe action going on at the time of speaking <br> <br>
                Express temporary action which may not be happening at the time of speaking.</b>
                  </td>
                  <td width="400" align="justify">
                    <br><br><br><br><br><br>&nbsp Examples: <br> 
                    <ul>
                        <li><b>They <font style="color: blue;">are swimming</font> in the pool.</li>
                    <li> John <font style="color: rgb(43, 18, 187);">is driving </font>his father's car while his own car is in the garage.</b></li>
                </ul>
                  </td>
              </tr>
              <tr>
                  <td><img src="images/presentcontinous.jpg" class="zoom"></td>
              </tr>
            <!--present perfect row-->
            <tr>
                <td width="250" rowspan="2">
                    <h1 style="font-size: 25px; color: rgb(226, 43, 202);"> PRESENT PERFECT </h1>
                </td>
                <td width="250" rowspan="2" align="justify">
                   <b> Express past action which is not defined by a time of occurrence. <br> <br>
                Express an action which started in the past and has continued up until now.</b>
                  </td>
                  <td width="400" align="justify" >
                    <br><br><br><br><br><br>&nbsp Examples: <br>
                    <ul>
                        <li><b> Teresa isn't at home. I think she <font style="color: rgb(241, 58, 119);">has gone</font> shopping.</li>
                        <li> She <font style="color: rgb(202, 32, 89);">has worked</font> in the bank for five years.</b></li>
                    </ul>  
                  </td>
              </tr>
              <tr>
                  <td><img src="images/presentperfect.png" class="zoom"></td>
              </tr>
            <!-- present perfect continuous row-->
            <tr>
                <td width="250" rowspan="2">
                 <h1 style="font-size: 25px; color: coral;"> PRESENT PERFECT CONTINUOUS </h1>
                </td>
                <td width="250" rowspan="2" align="justify">
                   <b>Express an action which started at some point in the past and may not be complete.</b>
                  </td>
                  <td width="400" align="justify" >
                    <br><br><br><br><br>&nbsp Examples:  <br>
                    <ul>
                        <li> <b> He <font style="color: rgb(233, 115, 18);">has been living</font> in Bankok since he left school.</b></li>
                    </ul>
                  </td>
              </tr>
              <tr>
                  <td><img src="images/presentperfectcontinous.jpg" class="zoom"></td>
              </tr>
          </table>
        </form>
      </div>


       <!--future form box-->
     <div class="form-popup" id="myFormFuture">
        <form class="form-container-future">
            <div class ="formtitle">
                <nav>
                    <h1>PRESENT TENSE</h1>    
                    <ul>
                        <li><a onclick="closeForm()">X</a></li>   
                    </ul>
                 </nav>   
            </div> 
          <table align="center">
              <!--simple future row-->
              <tr>
                  <td width="250" rowspan="2">
                      <br><br> 
                    <h1 style="font-size: 25px; color: rgb(15, 175, 15);">SIMPLE FUTURE </h1>
                  </td>
                  <td width="300"  align="justify"rowspan="2">
                    <br><br>
                    <b>Express an action or circumstance which hasn't taken place yet.</b> 
                  </td>
                  <td width="400" align="justify">
                    &nbsp Examples:  <br>
                     <ul><li><b>I <font style="color: green;">will eat</font> Japanese Food tomorrow. </b></li>
                </ul>     
                  </td>
              </tr>
              <tr>
                  <td><img src="images/simplefuture.jpg" class="zoom"> </td>
              </tr>
              <!--future continuous row-->
              <tr>
                <td width="250" rowspan="2" >
                 <h1 style="font-size: 25px; color: rgb(4, 160, 250);"> FUTURE CONTINUOUS </h1>
                </td>
                <td width="250" rowspan="2" align="justify">
                   <b> Express what will be going on at some time in the future. <br> <br>
                Express planned events.</b>
                  </td>
                  <td width="400" align="justify">
                    <br><br><br><br><br><br>&nbsp  Examples: <br> 
                    <ul>
                        <li><b>You <font style="color: blue;">will be missing</font> the sunshine once you're back in England.</li>
                    <li> This time next week I <font style="color: rgb(43, 18, 187);">will be sun bathing </font> in Bail.</b></li>
                </ul>  
                  </td>
              </tr>
              <tr>
                  <td><img src="images/futurecontinous.jpeg" class="zoom"></td>
              </tr>
            <!--present perfect row-->
            <tr>
                <td width="250" rowspan="2">
                    <h1 style="font-size: 25px; color: rgb(226, 43, 202);"> FUTURE PERFECT </h1>
                </td>
                <td width="250" rowspan="2" align="justify">
                   <b> Express an action that will be complete before another event takes place.</b>
                  </td>
                  <td width="400" align="justify" >
                    <br><br><br><br><br><br>&nbsp Examples: <br>
                    <ul>
                        <li> By the time I finish this course, I <font style="color: rgb(202, 32, 89);">will have taken </font>ten tests.</b></li>
                    </ul>  
                  </td>
              </tr>
              <tr>
                  <td><img src="images/futureperfect.jpg" class="zoom"></td>
              </tr>
            <!-- future perfect continuous row-->
            <tr>
                <td width="250" rowspan="2">
                 <h1 style="font-size: 25px; color: coral;"> FUTURE PERFECT CONTINUOUS </h1>
                </td>
                <td width="250" rowspan="2" align="justify">
                   <b>Describe an action that will have happened for some time and will not be complete yet at a certain point in the future.</b>
                  </td>
                  <td width="400" align="justify" >
                    <br><br><br><br><br><br>&nbsp Examples:  <br>
                    <ul>
                        <li> <b> I <font style="color: rgb(233, 115, 18);">will have been watching TV</font> for 3 hours when you arrive.</b></li>
                    </ul>
                  </td>
              </tr>
              <tr>
                  <td><img src="images/futureperfectcontinous.jpeg" class="zoom"></td>
              </tr>
          </table>
        </form>
      </div>

    <!--Footer-->
    <footer class="footer2" >
		<br>
			<p>Copyright &copy 2020 Learn English. All rights reserved.</font></p>
			
		<br>
    </footer>
</body>
</html>