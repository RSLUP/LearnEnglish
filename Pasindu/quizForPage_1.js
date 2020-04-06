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
        question: 'What part of speech describes a verb, adjective, or adverb and answers when? Where? How? And to what extent?',
        answers: [
            {text:'verb',correct:false}
            {text:'adjective',correct:false}
            {text:'adverb',correct:true}
            {text:'noun', correct:false}
        
        ]
        ,question:'What part of speech connects words or groups of words? Examples are for, and, nor, but, or, yet, and so?'
        ,answers:
        [
            {text:'preposition',correct:false}
            {text:'pronoun',correct:false}
            {text:'conjunction',correct:true}
            {text:'adverb',correct:false}
            
        ]
        ,question:'What part of speech describes a noun or pronoun and answers the questions which one(s)? How many/much? Or what kind(s)?'
        ,answers:
        [
            {text:'verb',correct:false}
            {text:'adjective',correct:true}
            {text:'adverb',correct:false}
            {text:'noun',correct:false}




    ]
    ,question:'Which part of speech expresses a mild or sudden burst of emotion? Examples are wow! or no.'
    ,answers:
    [
        {text:'preposition',correct:false}
        {text:'noun',correct:false}
        {text:'interjection',correct:true}
        {text:'verb',correct:false}





    ]
    ,question:'Which word must be able to be switched with the word "because" for it to be conjunction?'
    ,answers:
    [
        {text:'but',correct:false}
        {text:'or',correct:false}
        {text:'for',correct:true}
        {text:'because',correct:false}

    ]
    }




]