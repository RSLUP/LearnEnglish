var attempt=0;
function check()
{
  var question1 = document.quiz.q1.value;
	var question2 = document.quiz.q2.value;
  var question3 = document.quiz.q3.value;
  var question4 = document.quiz.q4.value;
	var question5 = document.quiz.q5.value;
  var question6 = document.quiz.q6.value;
	var question7 = document.quiz.q7.value;
  var question8 = document.quiz.q8.value;
  var question9 = document.quiz.q9.value;
  var question10 = document.quiz.q10.value;
  
	var correct = 0;


    if (question1 == "12") 
    {
		correct++;
    }
    if (question2 == "2")
     {
        correct++;
    }	
    if (question3 == "simple present tense")
     {
		correct++;
    }
    if (question4 == "students") 
    {
		correct++;
    }
    if (question5 == "present continuous tense")
     {
		correct++;
    }	
    if (question6 == "working")
     {
		correct++;
    }
    if (question7 == "have + past participle") 
    {
		correct++;
    }
    if (question8 == "future perfect tense")
     {
		correct++;
    }	
    if (question9 == "present perfect tense")
     {
		correct++;
	}
    if (question10 == "She had been waiting for me for 2 hours")
     {
		correct++;
    }
    

	var pictures = ["img/giphy.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct >= 0 && correct <=4) {
		score = 2;
	}

	if (correct>4 & correct<=6) {
		score = 1;
	}

	if (correct>6) {
		score = 0;
	}

  document.getElementById("after_submit").style.visibility = "visible";
  /*document.getElementById("after_submit_answerG").style.visibility = "visible";*/

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct out of 10";
  document.getElementById("picture").src = pictures[score];
  
    
    
    attempt += 1;
			sessionStorage.setItem("attempt",attempt);
			sessionStorage.setItem("score",correct);
			if(attempt ==1)
			{
				document.getElementById("atm1").innerHTML = sessionStorage.getItem("attempt");
				document.getElementById("scr1").innerHTML = sessionStorage.getItem("score");
				alert("You have "+(3-attempt)+" more attempts");
					}
			else if(attempt==2)
			{
				document.getElementById("atm2").innerHTML = sessionStorage.getItem("attempt");
				document.getElementById("scr2").innerHTML = sessionStorage.getItem("score");
				alert("You have "+(3-attempt)+" more attempts");
			}
			else if(attempt==3)
			{
				document.getElementById("atm3").innerHTML = sessionStorage.getItem("attempt");
				document.getElementById("scr3").innerHTML = sessionStorage.getItem("score");
				alert("You have no more attempts");

				document.getElementById("ans1").style.color='green';
				document.getElementById("ans2").style.color='green';
				document.getElementById("ans3").style.color='green';
				document.getElementById("ans4").style.color='green';
				document.getElementById("ans5").style.color='green';
				document.getElementById("ans6").style.color='green';
				document.getElementById("ans7").style.color='green';
				document.getElementById("ans8").style.color='green';
				document.getElementById("ans9").style.color='green';
				document.getElementById("ans10").style.color='green';

			}
			else
			{
				alert("Sorry, Your attempts are over. Please try again in another loggin session.")
			}
	
}
	
function reset()
{
  document.getElementById("rd").value = clear();
}