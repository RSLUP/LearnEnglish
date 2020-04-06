
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

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct out of 10";
	document.getElementById("picture").src = pictures[score];
	
}
	
