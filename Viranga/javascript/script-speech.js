const options = document.querySelector(".options").children;
const answerTrackerContainer = document.querySelector(".answers-tracker");
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const correctAnswerSpan = document.querySelector(".correct-answers");
const totalQuestionSpan2 = document.querySelector(".total-question2");
const percentage = document.querySelector(".percentage");
const result = document.querySelector(".result");
const question = document.querySelector(".question");
const quiz = document.querySelector(".quiz-over");
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");

const showSession = document.querySelector(".showSession");

let questionIndex =0;
let index =0;
let myArray=[];
let score =0;

//question,options and answers

const questions=
[
    {
        q:' "I bought a beautiful dress at the mall." - The word beautiful is a/an ______________',
        options:['Preposition','Adjective','Noun','Conjunction'],
        answer:1
    },
    {
        q:'"What did she ask you to do\?" - She is meant to be a _____________',
        options:['Conjunction','Preposition','Noun','Pronoun'],
        answer:3
    },
    {
        q:'"I left my shoes under the kitchen table" The word "under" is an/a ______________',
        options:['Adjective','Preposition','Pronoun','Conjunction'],
        answer:1
    },
    {
        q:'"If we finish our work quickly we can go to the movies." - The word "quickly" is an/a _____________',
        options:['Adverb','Preposition','Verb','Pronoun'],
        answer:0
    },
    {
        q:'"On Saturdays I work from nine to five." - The word "work" is an/a ____________',
        options:['Adverb','Preposition','Verb','Pronoun'],
        answer:2
    },
    {
        q:'"I want to go to a university in the United States." - The word "university" is an/a _____________',
        options:['Noun','Preposition','Verb','Pronoun'],
        answer:0
    },
    {
        q:'" I\'m sure I\'ve met your girlfriend before." - The word "met" is an/a ____________',
        options:['Noun','Interjection','Verb','Pronoun'],
        answer:2
    },
    {
        q:'"Well, I don\'t think I\'ll be home before 6." - The word "Well" is an/a _____________',
        options:['Preposition','Interjection','Adjective','Pronoun'],
        answer:1
    },
    {
        q:'"Andy knocked on the door but nobody answered." - The word "but" is an/a ____________',
        options:['Preposition','Interjection','Adjective','Conjunction'],
        answer:3
    },
    {
        q:'"After lunch let\'s go out for a coffee." - The word "After" is an/a _____________',
        options:['Preposition','Verb','Adjective','Conjunction'],
        answer:0
    }
    
]

//set question,option and quesion number
totalQuestionSpan.innerHTML=questions.length;
function load()
{
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;
}

//check answer
function check(element)
{
    if(element.id==questions[questionIndex].answer)
    {
        element.classList.add("correct");
        updateAnswerTracker("correct");
        score++;
        console.log("score: "+score);
    }
    else
    {
        element.classList.add("wrong");
        updateAnswerTracker("wrong");
    }
    disabledOptions();
    
}
function disabledOptions()
{
    for(let i=0; i<options.length; i++)
    {
        options[i].classList.add("disabled");
        if(options[i].id==questions[questionIndex].answer)
        {
            options[i].classList.add("correct");
        }
    }
}
function resultShow()
{
    if((score/questions.length)*100>=80)
    {
        return "Fantastic Job...!";
    }
    if((score/questions.length)*100>=60)
    {
        return "Good Try...!";
    }
    if((score/questions.length)*100>=40)
    {
        return "Not bad - Try Again";
    }
    else
    {
        return "Learn More..!";
    }
}
function enableOptions()
{
    for(let i=0; i<options.length; i++)
    {
        options[i].classList.remove("disabled","wrong","correct");
    }   
}
//check user select answer and then next question
function validate()
{
    if(!options[0].classList.contains("disabled"))
    {
        alert("You missed..! \nPlease Select your Answer");
    }
    else
    {
        enableOptions();
        randomQuestion();
    }
}
function next() 
{
    validate();
}
//generate random questions
function randomQuestion()
{
    let randomNumber = Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;
    if(index==questions.length)
    {
        quizOver();
       
    }
    
    else
    {
        //remove diplicates
        if(myArray.length>0)
        {
            for(let i=0; i<myArray.length;i++)
            {
                if(myArray[i]==randomNumber)
                {
                    hitDuplicate=1;
                    break;
                }
            }
            if(hitDuplicate ==1)
            {
                randomQuestion();
            }
            else
            {
                questionIndex=randomNumber;
                load();
            }
        }
        if(myArray.length==0)
        {
            questionIndex=randomNumber; 
            load();
        }
           
        myArray.push(randomNumber);
        
    }
}

//answerTrackerContainer
function answerTracker()
{
    for(let i=0; i<questions.length; i++)
    {
        const div =document.createElement("div");
        answerTrackerContainer.appendChild(div);
    }
}
//updateAnswerTracker
function updateAnswerTracker(className)
{
    answerTrackerContainer.children[index-1].classList.add(className);
}

//display result
function quizOver()
{
    
    quiz.classList.add("show");
    result.innerHTML = resultShow();
    correctAnswerSpan.innerHTML = score;
    totalQuestionSpan2.innerHTML = questions.length;
    let percen = (score/questions.length)*100;
    percentage.innerHTML = (percen.toFixed(2) +"%");
          
}

var attempt = 0;
function getResult()
{
    

    
    let percen = (score/questions.length)*100;
    localStorage.setItem("marks",percen.toFixed(2));
       
    
    localStorage.setItem("marks",percen.toFixed(2));
    alert("Attempt " + " : "+ localStorage.getItem("marks")+"%");
    
    //get result to consol
    console.log(localStorage.getItem("marks"));
    
}
//try again 
function tryAgain()
{
    window.location.reload();
    
}
window.onload = function()
{
    randomQuestion();
    answerTracker();
    
}
