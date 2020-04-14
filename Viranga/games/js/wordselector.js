const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard=false;
let firstCard, secondCard;
function flipCard()
{
    if(lockBoard) return;

    if(this===firstCard) return;

    this.classList.add('flip');

    if(!hasFlippedCard)
    {
        hasFlippedCard = true;
        firstCard =this;
        return;
    }
    
        hasFlippedCard=false;
        secondCard = this;
        checkForMatch();

  
}

function checkForMatch()
{
    if(firstCard.dataset.card===secondCard.dataset.card)
    {
        disableCards();
    }
    else
    {
        unFlipCards();
        
    }
}

function disableCards()
{
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unFlipCards()
{
    lockBoard = true;
    setTimeout(() =>
    {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    },1200);
}

function resetBoard()
{
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard ,secondCard] = [null, null];
}

(function shuffle()
{
    cards.forEach(card => 
    {
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));