
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var correct = 0;


	if (question1 == "8") {
		correct++;
}
	if (question2 == "Articles") {
		correct++;
}	
	if (question3 == "Noun") {
		correct++;
	}
	if (question4 == "Adverb") {
		correct++;
	}
	if (question5 == "comfortable") {
		correct++;
	}
	if (question6 == "Prepositions") {
		correct++;
	}
	if (question7 == "to joins words, phrases, or clauses") {
		correct++;
	}
	if (question8 == "Interjection") {
		correct++;
	}
	if (question9 == "describe a noun") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
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
	document.getElementById("after_submit_answer").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct out of 10";
	document.getElementById("picture").src = pictures[score];
	}
	
