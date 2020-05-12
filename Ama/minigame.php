<?php
    include('session2.php');
    if(!isset($_SESSION['login_user'])){
    header("location:Login.php"); // Redirecting To Home Page
    }
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SuDoKu</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/login.css">
  <script type="text/javascript" src="js/login.js"></script>
  <script type="text/javascript" src="js/javascript.js"></script>

  <link rel="stylesheet" type="text/css" href="miniGame/minigames.css">
  <script type="text/javascript" src="miniGame/minigames.js"> </script>


    <!--css of jquey ui-->
    <link   
    rel="stylesheet"
    href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
    />
    <!--jquery library-->
    <script
    src="https://code.jquery.com/jquery-3.5.0.min.js"
    integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ="
    crossorigin="anonymous"
    ></script>
    <!--jquery ui library-->
    <script
    src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
    integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
    crossorigin="anonymous"
    ></script>
    <script>
      $(function (){
          var availabletags11 = ['2 3 7 9'];
          $("#cell11").autocomplete({source: availabletags11});
           });

           $(function (){
          var availabletags21 = ['4 6 8 9'];
          $("#cell21").autocomplete({source: availabletags21});
           });

           $(function (){
          var availabletags28 = ['2 3 5 7'];
          $("#cell28").autocomplete({source: availabletags28});
           });

           $(function (){
          var availabletags33 = ['1 2 4 6'];
          $("#cell33").autocomplete({source: availabletags33});
           });

           $(function (){
          var availabletags35 = ['5 7 8'];
          $("#cell35").autocomplete({source: availabletags35});
           });

           $(function (){
          var availabletags36 = ['1 2 3 5'];
          $("#cell36").autocomplete({source: availabletags36});
           });

           $(function (){
          var availabletags46 = ['3 4 6 8'];
          $("#cell46").autocomplete({source: availabletags46});
           });

           $(function (){
          var availabletags47 = ['1 3 6 7 8'];
          $("#cell47").autocomplete({source: availabletags47});
           });

           $(function (){
          var availabletags53 = ['4 7 8 9'];
          $("#cell53").autocomplete({source: availabletags53});
           });

           $(function (){
          var availabletags64 = ['1 2 3 7'];
          $("#cell64").autocomplete({source: availabletags64});
           });

           $(function (){
          var availabletags68 = ['3 4 7 9'];
          $("#cell68").autocomplete({source: availabletags68});
           });

           $(function (){
          var availabletags74 = ['1 3 4 6 9'];
          $("#cell74").autocomplete({source: availabletags74});
           });

           $(function (){
          var availabletags78 = ['1 3 6 8'];
          $("#cell78").autocomplete({source: availabletags78});
           });

           $(function (){
          var availabletags82 = ['4 6 8'];
          $("#cell82").autocomplete({source: availabletags82});
           });

           $(function (){
          var availabletags89 = ['2 5 6 8'];
          $("#cell89").autocomplete({source: availabletags89});
           });
      </script>

</head>  
<body>
  <div class="dropdown">
    <nav class="nav" >
      <!--<div align="left"><img class="logo" src="img/logo2.jpg/"></div>-->
     <ul>
     <li><a href="EnglishHub.php"> Home </a></li>
     <li><a href="grammar.php">Grammar</a></li>
     <li><a href="#">Vocabulary</a></li>
     <li><a href="speaking.php">Speaking</a></li>
     <li><a href="#">Writing </a></li>
     <li><a href="miniGame/minigame.php">Mini games</a></li>
     <li><a href="#">Quizes </a>
    <ul>
      <li><a href="grammarquiz.php">Grammar</a></li>
      <li><a href="speakingquiz.php">Speaking</a></li>
    </ul></li>
      
    </ul>
    </nav>
  </div> <br><br> <br><br>
  <div class="nav2" align="middle">
     <button id="start" onclick="timeStart();" > Start </button>
      <button id="play-again" onclick="reload();"> Play Again </button>
        <button id="rules" ><a href="#rule-and-reg">Rules and Regulations</a> </button>
        <button id="show-ans"><a href = "#answer-grid" >Show Answers</a></button>
    

  </div>
  <div id="initial-pic" align="middle">
    <img src="miniGame/sudoku1.gif">
  </div>
<br><br><br>

<div  id="main-table">
  <table align="center">
    <tr>
      <td rowspan="2" width="600" align="center">
        <table align="left" align="center">
          <tr>
            <td class="bend">
              <div class="container" id="main" class="ui-widget">
                <div class="box"><input id="cell11" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell12">8</div>
                <div class="box"  id="cell13">7</div>
                <div class="box"  id="cell14">2</div>
                <div class="box"><input id="cell15" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell16" oninput="wrong();" autocomplete="off"></div>
                <div class="box"  id="cell17">3</div>
                <div class="box"  id="cell18">5</div>
                <div class="box"><input id="cell19" oninput="wrong();"autocomplete="off"></div>
            </div>
            </td>
            <td class="bend">
              <div class="container" id="main">
                <div class="box"><input id="cell21" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell22" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell23">4</div>
                <div class="box"><input id="cell24" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell25" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell26">3</div>
                <div class="box" id="cell27">9</div>
                <div class="box"><input id="cell28" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell29">8</div>
            </div>
            </td>
            <td class="bend">
              <div class="container" id="main">
                <div class="box" id="cell31">3</div>
                <div class="box"><input id="cell32" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell33" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell34" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell35" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell36" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell37" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell38" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell39">6</div>
            </div>
            </td>
          </tr>
      
          <tr>
            <td class="bend">
              <div class="container" id="main">
                <div class="box" id="cell41">1</div>
                <div class="box"><input id="cell42"  oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell43">8</div>
                <div class="box" id="cell44">6</div>
                <div class="box"><input id="cell45" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell46" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell47" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell48">9</div>
                <div class="box"><input id="cell49" oninput="wrong();" autocomplete="off"></div>
            </div>
            </td>
            <td class="bend">
              <div class="container" id="main">
                <div class="box"><input id="cell51" oninput="wrong();"></div>
                <div class="box" id="cell52">3</div>
                <div class="box"><input id="cell53" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell54">8</div>
                <div class="box"><input id="cell55" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell56">2</div>
                <div class="box"><input id="cell57" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell58">6</div>
                <div class="box"><input id="cell59" oninput="wrong();" autocomplete="off"></div>
            </div>
            </td>
            <td class="bend">
              <div class="container" id="main">
                <div class="box"><input id="cell61" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell62">9</div>
                <div class="box"><input id="cell63" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell64" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell65" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell66">7</div>
                <div class="box" id="cell67">8</div>
                <div class="box"><input id="cell68" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell69" oninput="wrong();" autocomplete="off"></div>
            </div>
            </td>
          </tr>
      
      
          <tr>
            <td class="bend">
              <div class="container" id="main">
                <div class="box" id="cell71">5</div>
                <div class="box" id="cell72">1</div>
                <div class="box"><input id="cell73" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell74" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell75" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell716">2</div>
                <div class="box"><input id="cell77" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell78" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell79">3</div>
            </div>
            </td>
            <td class="bend">
              <div class="container" id="main">
                <div class="box"  id="cell81">2</div>
                <div class="box"><input id="cell82" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell83">6</div>
                <div class="box" id="cell84">3</div>
                <div class="box"><input id="cell85" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell86" oninput="wrong();" autocomplete="off"></div>
                <div class="box" id="cell87">7</div>
                <div class="box"><input id="cell88" oninput="wrong();" autocomplete="off"></div>
                <div class="box"><input id="cell89" oninput="wrong();" autocomplete="off"></div>
            </div>
            </td>
            <td class="bend">
              <div class="container" id="main">
                <div class="box"  id="cell91">4</div>
                <div class="box"  id="cell92">7</div>
                <div class="box"  id="cell93">3</div>
                <div class="box"><input id="cell94" oninput="wrong();" autocomplete="off"></div>
                <div class="box"  id="cell95">6</div>
                <div class="box"  id="cell96">8</div>
                <div class="box"  id="cell97">2</div>
                <div class="box"  id="cell98">1</div>
                <div class="box"  id="cell99"><input id="cell99" oninput="wrong();" autocomplete="off"></div>
            </div>
            </td>
          </tr>
        </table>
      </td>
      <td width="600">
      
        <div class="timer" align="middle">Timer</div>
        <div id="mins" class="timer" align="middle"> </div>
      </td>
    </tr>
    <tr>
      <td>
        <div><button id="show-score" onclick="wrong();">Show My Score</button></div>
        <div id="my-score"> </div>
      </td>
    </tr>
  </table>
</div>
<script>
  $("#main-table").hide();
  $("#show-ans").hide();
  $('#start').on('click', function () {
  $('#main-table').show();
  $("#show-ans").show();
  $('#initial-pic').hide();
});
</script>

    <div id="rule-and-reg">
      <ul>
        <li>You will be given some points at the begining of the game</li>
        <li>2 points will be given for each correct answer</li>
        <li>1 point will be decreased for each wrong answer</li>
        <li>At the end you will be given additional 10 points, if you have completed the game within the given time(15min)</li>
        <li>Timer will start when you hit on the 'start' button</li>
        <li>Answers are also can be seen below. But, For each view of answer your points will decrease by 1</li>
        <li>Some colors will display when you input any number
          <ul>
            <li>Red color indicate the wrong answer</li>
            <li>Cream color indicate a answer which can be correct. But note that you are given only suggestions. Not exactly the correct answer</li>
          </ul>
        </li>
        <li>Some cells have given suggestions. But some are not</li>
        <li>Thanks for playing this game. Enjoy!</li>
      </ul>
    </div>
    
    <script>
        $("#rule-and-reg").hide();
        $('#rules').on('click', function () {
        $('#rule-and-reg').show();
      });
    </script>

<br><br><br>
 <div id="answer-grid">
  <table align="center">
    <tr>
      <td class="bend">
        <div class="container" id="main" class="ui-widget">
          <div class="box"><button id="btn11" class="btn" onclick="wrong();"></div>
          <div class="box">8</div>
          <div class="box">7</div>
          <div class="box">2</div>
          <div class="box"><button id="btn15" class="btn" onclick="wrong();"></button></div>
          <div class="box"><button id="btn16" class="btn" onclick="wrong();"></button></div>
          <div class="box">3</div>
          <div class="box">5</div>
          <div class="box"><button id="btn19" class="btn" onclick="wrong();"></div>
      </div>
      </td>

      <td class="bend">
        <div class="container" id="main">
          <div class="box"><button id="btn21" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn22" class="btn" onclick="wrong();"></div>
          <div class="box">4</div>
          <div class="box"><button id="btn24" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn25" class="btn" onclick="wrong();"></div>
          <div class="box">3</div>
          <div class="box">9</div>
          <div class="box"><button id="btn28" class="btn" onclick="wrong();"></div>
          <div class="box">8</div>
      </div>
      </td>
  
      <td class="bend">
        <div class="container" id="main">
          <div class="box">3</div>
          <div class="box"><button id="btn32" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn33" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn34" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn35" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn36" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn37" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn38" class="btn" onclick="wrong();"></div>
          <div class="box">6</div>
      </div>
      </td>
    </tr>

    <tr>
      <td class="bend">
        <div class="container" id="main">
          <div class="box">1</div>
          <div class="box"><button id="btn42" class="btn" onclick="wrong();"></div>
          <div class="box">8</div>
          <div class="box">6</div>
          <div class="box"><button id="btn45" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn46" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn47" class="btn" onclick="wrong();"></div>
          <div class="box">9</div>
          <div class="box"><button id="btn49" class="btn" onclick="wrong();"></div>
      </div>
      </td>
 
      <td class="bend">
        <div class="container" id="main">
          <div class="box"><button id="btn51" class="btn" onclick="wrong();"></div>
          <div class="box">3</div>
          <div class="box"><button id="btn53" class="btn" onclick="wrong();"></div>
          <div class="box">8</div>
          <div class="box"><button id="btn55" class="btn" onclick="wrong();"></div>
          <div class="box">2</div>
          <div class="box"><button id="btn57" class="btn" onclick="wrong();"></div>
          <div class="box">6</div>
          <div class="box"><button id="btn59" class="btn" onclick="wrong();"></div>
      </div>
      </td>

      <td class="bend">
        <div class="container" id="main">
          <div class="box"><button id="btn61" class="btn" onclick="wrong();"></div>
          <div class="box">9</div>
          <div class="box"><button id="btn63" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn64" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn65" class="btn" onclick="wrong();"></div>
          <div class="box">7</div>
          <div class="box">8</div>
          <div class="box"><button id="btn68" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn69" class="btn" onclick="wrong();"></div>
      </div>
      </td>
    </tr>

    <tr>
      <td class="bend">
        <div class="container" id="main">
          <div class="box">5</div>
          <div class="box">1</div>
          <div class="box"><button id="btn73" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn74" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn75" class="btn" onclick="wrong();"></div>
          <div class="box">2</div>
          <div class="box"><button id="btn77" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn78" class="btn" onclick="wrong();"></div>
          <div class="box">3</div>
      </div>
      </td>

      <td class="bend">
        <div class="container" id="main">
          <div class="box">2</div>
          <div class="box"><button id="btn82" class="btn" onclick="wrong();"></div>
          <div class="box">6</div>
          <div class="box">3</div>
          <div class="box"><button id="btn85" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn86" class="btn" onclick="wrong();"></div>
          <div class="box">7</div>
          <div class="box"><button id="btn88" class="btn" onclick="wrong();"></div>
          <div class="box"><button id="btn89" class="btn" onclick="wrong();"></div>
      </div>
      </td>

      <td class="bend">
        <div class="container" id="main">
          <div class="box">4</div>
          <div class="box">7</div>
          <div class="box">3</div>
          <div class="box"><button id="btn94" class="btn" onclick="wrong();"></div>
          <div class="box">6</div>
          <div class="box">8</div>
          <div class="box">2</div>
          <div class="box">1</div>
          <div class="box"><button id="btn99" class="btn" onclick="wrong();"></div>
      </div>
      </td>
    </tr>
    <script>
         var decrease=0;
        $('#btn11').on('click', function () {
        $('#btn11').text('9')
        decrease ++; localStorage.setItem("decrease", decrease); 
        });
        $('#btn15').on('click', function () {
        $('#btn15').text('4');
        decrease ++; localStorage.setItem("decrease", decrease);
        });
        $('#btn16').on('click', function () {
        $('#btn16').text('6');
        decrease ++;localStorage.setItem("decrease", decrease);});
        $('#btn19').on('click', function () {
        $('#btn19').text('1');
        decrease ++;  localStorage.setItem("decrease", decrease);});
        $('#btn21').on('click', function () {
        $('#btn21').text('6');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn22').on('click', function () {
        $('#btn22').text('5');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn24').on('click', function () {
        $('#btn24').text('1');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn25').on('click', function () {
        $('#btn25').text('7');
        decrease ++; localStorage.setItem("decrease", decrease); });
        $('#btn28').on('click', function () {
        $('#btn28').text('2');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn32').on('click', function () {
        $('#btn32').text('2');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn33').on('click', function () {
        $('#btn33').text('1');
        decrease ++; localStorage.setItem("decrease", decrease); });
        $('#btn34').on('click', function () {
        $('#btn34').text('9');
        decrease ++;  localStorage.setItem("decrease", decrease);});
        $('#btn35').on('click', function () {
        $('#btn35').text('8');
        decrease ++;localStorage.setItem("decrease", decrease); });
        $('#btn36').on('click', function () {
        $('#btn36').text('5');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn37').on('click', function () {
        $('#btn37').text('7');    
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn38').on('click', function () {
        $('#btn38').text('4');    
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn42').on('click', function () {
        $('#btn42').text('2');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn45').on('click', function () {
        $('#btn45').text('3');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn46').on('click', function () {
        $('#btn46').text('4');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn47').on('click', function () {
        $('#btn47').text('7');
        decrease ++;localStorage.setItem("decrease", decrease); });
        $('#btn49').on('click', function () {
        $('#btn49').text('5');
        decrease ++;localStorage.setItem("decrease", decrease); });
        $('#btn51').on('click', function () {
        $('#btn51').text('5');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn53').on('click', function () {
        $('#btn53').text('7');
        decrease ++;localStorage.setItem("decrease", decrease); });
        $('#btn55').on('click', function () {
        $('#btn55').text('9');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn57').on('click', function () {
        $('#btn57').text('4');
        decrease ++; localStorage.setItem("decrease", decrease); });
        $('#btn59').on('click', function () {
        $('#btn59').text('1');
        decrease ++; localStorage.setItem("decrease", decrease);});
         $('#btn61').on('click', function () {
        $('#btn61').text('6');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn63').on('click', function () {
        $('#btn63').text('4');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn64').on('click', function () {
        $('#btn64').text('1');
        decrease ++;localStorage.setItem("decrease", decrease); });
        $('#btn65').on('click', function () {
        $('#btn65').text('5');
        decrease ++;localStorage.setItem("decrease", decrease); });
        $('#btn68').on('click', function () {
        $('#btn68').text('3');
        decrease ++;localStorage.setItem("decrease", decrease);});
        $('#btn69').on('click', function () {
        $('#btn69').text('2');    
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn73').on('click', function () {
        $('#btn73').text('9');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn74').on('click', function () {
        $('#btn74').text('4');
        decrease ++;localStorage.setItem("decrease", decrease); });
        $('#btn75').on('click', function () {
        $('#btn75').text('7');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn77').on('click', function () {
        $('#btn77').text('8');
        decrease ++;localStorage.setItem("decrease", decrease); });
        $('#btn78').on('click', function () {
        $('#btn78').text('6');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn82').on('click', function () {
        $('#btn82').text('8');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn85').on('click', function () {
        $('#btn85').text('1');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn86').on('click', function () {
        $('#btn86').text('9');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn88').on('click', function () {
        $('#btn88').text('4');
        decrease ++;localStorage.setItem("decrease", decrease); });
        $('#btn89').on('click', function () {
        $('#btn89').text('5');
        decrease ++;localStorage.setItem("decrease", decrease); });
        $('#btn94').on('click', function () {
        $('#btn94').text('5');
        decrease ++; localStorage.setItem("decrease", decrease);});
        $('#btn99').on('click', function () {
        $('#btn99').text('9');
        decrease ++;localStorage.setItem("decrease", decrease);});

        
      
 </script>
  </table>
 </div>
 <script>

  $("#answer-grid").hide();
  $('#show-ans').on('click', function () {
  $('#answer-grid').show();
  
});
</script>
</body>
</html>