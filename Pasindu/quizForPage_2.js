const startButton = document.getElementById('start_btn')
const nextButton = document.getElementById('next_btn')

const questionContainerElement = document.getElementById('question_container')

questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer_buttons')

let suffledQuestions, currentQuestionIndex

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', ()=>{


    currentQuestionIndex++
    setNextQuestion()
})
function startGame(){

    console.log('Started')
    startButton.classList.add('hide')
    suffledQuestions = questions.sort(()=>math.random()- .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQusetions[currentQuestionIndex])

}
showQuestion(question){

    questionElement.innerText=question.question
    question.answers.forEach(answer=>{

        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        if(answer.correct){

            button.dataset.correct = answer.correct

        }

        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
})
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){

        answerButtonsElement.removeChild(answerButtonsElement.firstChild)

    }

}

function selectAnswer(){

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body. correct)
    Array.from(answerButtonsElement.children).forEach(button=>{

        setStatusClass(button, button.dataset.correct)

    })
    if(shuffledQusetions.length>currentQuestionIndex+1){

        nextButton.classList.remove('hide')


    }
    else{

        startButton.innerText = 'restart'
        startButton.classList.remove('hide')


    }
    nextButton.classList.remove('hide')
}

setStatusClass(element, correct){

    clearStatusClass(element)
    if(correct){

        element.classList.add('correct')

    }
    else{

        element.classList.add('wrong')
    }

}
function clearStatusClass(element){

    element.classList.remove('correct')
    element.classList.remove('wrong')



}
const questions = [
    {
        question: "John's mom ________ him home from school most days."
        ,answers: [
            {text:'drive',correct:false}
            {text:'drived',correct:false}
            {text:'drives',correct:true}
            {text:'driving', correct:false}
        
        ]
        ,question:"One day last year John ___________ for his mom at the front door."
        ,answers:
        [
            {text:'will wait',correct:false}
            {text:'waiting',correct:false}
            {text:'did wait',correct:true}
            {text:'waited',correct:false}
            
        ]
        ,question:"Just before he got there, a tree branch ________ down on the car."
        ,answers:
        [
            {text:'will crash',correct:false}
            {text:'crashed',correct:true}
            {text:'crash',correct:false}
            {text:'crashing',correct:false}




    ]
    ,question:"Earth's climate _________ over the centuries."
    ,answers:
    [
        {text:'will change',correct:false}
        {text:'changed',correct:false}
        {text:'changes',correct:true}
        {text:'changing',correct:false}





    ]
    ,question:"During the last Ice Age, glaciers ____________ Canada."
    ,answers:
    [
        {text:'will cover',correct:false}
        {text:'covering',correct:false}
        {text:'covered',correct:true}
        {text:'cover',correct:false}

    ]
    }




]