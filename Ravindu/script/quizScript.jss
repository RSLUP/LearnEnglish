const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
  {
    question: "Q1: I ..... tennis every Sunday morning.??",
    answers: {
      a: "playing",
      b: "play",
      c: "an playing"
    },
    correctAnswer: "b"
  },
  {
    question: "Q2: Don't make so much noise. saman ..... to study for his ESL test!?",
    answers: {
      a: "try",
      b: "is trying",
      c: "tries"
    },
    correctAnswer: "d"
  },
  {
    question: "Q3:Supuni ..... her teeth before breakfast every morning.?",
    answers: {
      a: "will cleaned",
      b: "is cleaning",
      c: "cleans",
      d: "clean"
    },
    correctAnswer: "c"
  },
  {
    question: "Q4: Sorry, she can't come to the phone. She ..... a bath!",
    answers: {
      a: "is having",
      b: "having",
      c: "have",
      d: "has"
    },
    correctAnswer: "a"
  },
  {
    question: "Q5:..... many times every winter in Frankfurt.",
    answers: {
      a: "it snows",
      b: "it snowed",
      c: "it is snowing",
      d: "it is snow"
    },
    correctAnswer: "a"
  },
  {
    question: "Q6: How many students in your class ..... from Korea?",
    answers: {
      a: "comes",
      b: "come",
      c: "came",
      d: "are coming"
    },
    correctAnswer: "b"
  }


];
