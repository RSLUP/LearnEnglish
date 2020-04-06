var currentQuestion = 0;
var scroe = 0;
var totQuestions = allQuestions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('questions');
var opt1 = document.getElementById('op1');
var opt2 = document.getElementById('op2');
var opt3 = document.getElementById('op3');
var opt4 = document.getElementById('op4');
var nextButton = document.getElementById('nextButton');
var resultcontainer = document.getElementById('result');

function loadQuestion(questionIndex){
    var q = allQuestions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' +q.question; 
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion(){
    var SelecteOption = document.querySelector('input[type=radio]:checked');
    if(!SelecteOption){
        alert('Please select your answer.');
        return;
    }

    var answer = SelecteOption.value;
    if(allQuestions[currentQuestion].answer == answer){
        scroe += 1;
    }
    SelecteOption.checked = false;
    currentQuestion++;

    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }

    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultcontainer.style.display = '';
        resultcontainer.textContent = 'Correct Answers: ' +scroe;
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
// loadNextQuestion();


