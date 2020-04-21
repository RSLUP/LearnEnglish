// code to display random quotes
  writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Action is the real measure of intelligence.";
    quotes[1] = "Baseball has the great advantage over cricket of being sooner ended.";
    quotes[2] = "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mind.";
    quotes[3] = "A good head and a good heart are always a formidable combination.";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }

// code to show the date at the top of the webpage
  function showDate() {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1; //months are zero based
      var curr_year = d.getFullYear();
      document.write(curr_date + "-" + curr_month + "-" + curr_year);
    }


    function myFunction(x) {
      x.classList.toggle("fa-thumbs-down");
    }


// javascript code for tenses

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





// beak there

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}





// functioalitiy for the quizez

var Quiz = function(){
  var self = this;
  this.init = function(){
    self._bindEvents();
  }

  this.correctAnswers = [
    { question: 1, answer: 'b' },
    { question: 2, answer: 'd' },
    { question: 3, answer: 'c' },
    { question: 4, answer: 'a' },
    { question: 5, answer: 'a' },
    { question: 6, answer: 'b' },
  ]

  this._pickAnswer = function($answer, $answers){
    $answers.find('.quiz-answer').removeClass('active');
    $answer.addClass('active');
  }
  this._calcResult = function(){
    var numberOfCorrectAnswers = 0;
    $('ul[data-quiz-question]').each(function(i){
      var $this = $(this),
          chosenAnswer = $this.find('.quiz-answer.active').data('quiz-answer'),
          correctAnswer;

      for ( var j = 0; j < self.correctAnswers.length; j++ ) {
        var a = self.correctAnswers[j];
        if ( a.question == $this.data('quiz-question') ) {
          correctAnswer = a.answer;
        }
      }

      if ( chosenAnswer == correctAnswer ) {
        numberOfCorrectAnswers++;

        // highlight this as correct answer
        $this.find('.quiz-answer.active').addClass('correct');
      }
      else {
        $this.find('.quiz-answer[data-quiz-answer="'+correctAnswer+'"]').addClass('correct');
        $this.find('.quiz-answer.active').addClass('incorrect');
      }
    });
    if ( numberOfCorrectAnswers < 3 ) {
      return {code: 'bad', text: 'Poor Grammer Skills'};
    }
    else if ( numberOfCorrectAnswers == 3 || numberOfCorrectAnswers == 4 ) {
      return {code: 'mid', text: 'Moderate Grammer Skills'};
    }
    else if ( numberOfCorrectAnswers > 4 ) {
      return {code: 'good', text: 'Good Grammer Skills'};
    }
  }
  this._isComplete = function(){
    var answersComplete = 0;
    $('ul[data-quiz-question]').each(function(){
      if ( $(this).find('.quiz-answer.active').length ) {
        answersComplete++;
      }
    });
    if ( answersComplete >= 6 ) {
      return true;
    }
    else {
      return false;
    }
  }
  this._showResult = function(result){
    $('.quiz-result').addClass(result.code).html(result.text);
  }
  this._bindEvents = function(){
    $('.quiz-answer').on('click', function(){
      var $this = $(this),
          $answers = $this.closest('ul[data-quiz-question]');
      self._pickAnswer($this, $answers);
      if ( self._isComplete() ) {

        // scroll to answer section
        $('html, body').animate({
          scrollTop: $('.quiz-result').offset().top
        });

        self._showResult( self._calcResult() );
        $('.quiz-answer').off('click');

      }
    });
  }
}
var quiz = new Quiz();
quiz.init();
