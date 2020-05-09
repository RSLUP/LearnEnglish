var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
 
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var nextBtn = document.getElementById('nextBtn');
var resultCont = document.getElementById('result');

var questions = [{
    "question" : "Which one can not consider as a Noun ?",
    "option1" : "A thing",
    "option2" : "A place",
    "option3" : "An animal",
    "option4" : "An action",
    "answer" : "4"
}, {
    "question" : "Verbs are using to ?",
    "option1" : "Replace a Noun",
    "option2" : "Describe a Noun",
    "option3" : "Show action",
    "option4" : "Connect words",
    "answer" : "3"
}, {
    "question" : "Which one it the not a Adjective ?",
    "option1" : "Angry",
    "option2" : "Quickly",
    "option3" : "Helthy",
    "option4" : "Good",
    "answer" : "2"
}, {
    "question" : "Choose the Adverb ?",
    "option1" : "Nearly",
    "option2" : "Healthy",
    "option3" : "Interesting",
    "option4" : "John",
    "answer" : "1"
}, {
    "question" : "Which one is Used with a Article ?",
    "option1" : "Brown cat",
    "option2" : "The cat",
    "option3" : "Cat runs",
    "option4" : "Little cat",
    "answer" : "2"
}, {
    "question" : "Which on is not a Preposition ?",
    "option1" : "since",
    "option2" : "between",
    "option3" : "an",
    "option4" : "after",
    "answer" : "3"
}, {
    "question" : "Conjunctions are use to ?",
    "option1" : "Connect words",
    "option2" : "Connect phases",
    "option3" : "Connect sentences",
    "option4" : "All of them",
    "answer" : "4"
}, {
    "question" : "Choose the interjection ?",
    "option1" : "I",
    "option2" : "Oops",
    "option3" : "an",
    "option4" : "angry",
    "answer" : "2"
}, {
    "question" : "Which one is the Pronoun ?",
    "option1" : "I",
    "option2" : "Quickly",
    "option3" : "John",
    "option4" : "Run",
    "answer" : "1"
}, {
    "question" : "Choose the interjection ?",
    "option1" : "above",
    "option2" : "since",
    "option3" : "of",
    "option4" : "None of them",
    "answer" : "4"
}

];

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }

    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions -1){
        nextBtn.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        quizContainer.style.display = none;
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }

    loadQuestion(currentQuestion);
};

loadQuestion(currentQuestion);  