const options = document.querySelector(".options").children;
const answerTrackerContainer = document.querySelector(".answers-tracker");
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const correctAnswerSpan = document.querySelector(".correct-answers");
const totalQuestionSpan2 = document.querySelector(".total-question2");
const result = document.querySelector(".result");
const percentage = document.querySelector(".percentage");
const question = document.querySelector(".question");
const quiz = document.querySelector(".quiz-over");
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");

let questionIndex =0;
let index =0;
let myArray=[];
let score =0;

//question,options and answers

const questions=
[
    {
        q:' "Because of the cold weather, lately Samantha has been feeling tired." - The tense "has been feeling" belongs to ___________',
        options:['Present Perfect Continuous Tense','Past Continuous Tense','Future Perfect Continuous Tense','Future Simple Tense'],
        answer:0
    },
    {
        q:' "At least twice a day, my patience is tested by middle school students." - The tense "is tested" belongs to ___________',
        options:['Past Simple Tense','Past Continuous Tense','Present Simple Tense','Future Perfect Tense'],
        answer:2
    },
    {
        q:' "Next February I will visit Japan." - The tense "I will visit" belongs to ___________',
        options:['Past Simple Tense','Future Simple Tense','Present Simple Tense','Future Perfect Tense'],
        answer:1
    },
    {
        q:' "While Kasun _________________, milk came out of his nose." - Fill the blank using Past Continuous Tense',
        options:['are laughing','is laughing','were laughing','was laughing'],
        answer:3
    },
    {
        q:' "The students __________________ college by 2020." - Fill the blank using Future Perfect Tense',
        options:['are graduated','were graduated','will have graduated','will be graduated'],
        answer:2
    },
    {
        q:' "These days, the rain forests __________________, which is a major contributor to global warming." - Fill the blank using Present Continuous Tense',
        options:['are being destroyed','have destroyed','is destroying','will be destroyed'],
        answer:0
    },
    {
        q:' "Upon my arrival home yesterday, I ________ on the sofa, ________ TV and ________ asleep within 20 minutes." - Fill the blank using Simple Past Tense',
        options:['sit, watched, fell','sat, watched, fell','sat, watched, felt','sat, watching, fell'],
        answer:1
    },
    {
        q:' "Kamal had that same purple t-shirt with white stripes for 6 years." - The tense "had" belongs to ___________',
        options:['Past Simple Tense','Present Perfect Tense','Past Perfect Tense','Future Perfect Tense'],
        answer:2
    },
    {
        q:' "I have heard the music of Pandit W.A Amaradeva and I like it." - The tense "have heard" belongs to ___________',
        options:['Past Perfect Tense','Present Perfect Tense','Past Simple Tense','Future Perfect Tense'],
        answer:1
    },
    {
        q:' "The mosquitoes had been sucking blood from my forehead for nearly two hours before I finally woke up." - The tense "had been sucking" belongs to ___________',
        options:['Past Simple Tense','Present Perfect Tense','Past Perfect Tense','Past Perfect Continuous Tense'],
        answer:3
    },
    {
        q:' "By the end of this class, you will have taken a difficult verb tense quiz." - The tense "you will have taken" belongs to ___________',
        options:['Present Perfect Tense','Past Simple Tense','Future Perfect Tense','Past Perfect Continuous'],
        answer:2
    },
    {
        q:' "By January 2010, Nimal _______________ English for five years." - Fill the blank using Future Perfect Tense',
        options:['will have studied','will be studied','is going to studied','will has studied'],
        answer:0
    },
    {
        q:' "George hurt his head while he __________ ." - Fill the blank',
        options:['had ice skated','was ice skating','ice skates','ice skated'],
        answer:1
    },
    {
        q:' "The last time I __________ to Korea, I spent three weeks on Cheju island." - Fill the blank',
        options:['was going','have gone','went','is going'],
        answer:2
    },
    
    
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
function enableOptions()
{
    for(let i=0; i<options.length; i++)
    {
        options[i].classList.remove("disabled","wrong","correct");
    }   
}
//result show
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

function quizOver()
{
    
    quiz.classList.add("show");
    result.innerHTML = resultShow();
    correctAnswerSpan.innerHTML = score;
    totalQuestionSpan2.innerHTML = questions.length;
    let percen = (score/questions.length)*100;

   
    
    percentage.innerHTML = (percen.toFixed(2) +"%");
}
function getResult()
{

    let percen = (score/questions.length)*100;
   
    localStorage.setItem("marks",percen.toFixed(2));
       
    
    //localStorage.setItem("marks",percen.toFixed(2));
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