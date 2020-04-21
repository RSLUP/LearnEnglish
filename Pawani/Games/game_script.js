
const grid=function () {
    return Array.from(document.getElementsByClassName("q"));
};

// replace id 'q' with ' ' & convert that string to integer
const qNumId = function (qEl) {
    return Number.parseInt(qEl.id.replace('q', ''));
};


//function for create array with empty spaces
const emptyQs=function() {
    return grid().filter(checkEmpty);
};
function checkEmpty(qelement){
    if(qelement.innerText==='') {
        return qelement;
    }
}



const clickFn = function($event){
    // return console.log($event.target);
    takeTurn(qNumId($event.target),'X'); //calling takeTurn function by passing index and letter(parameters)
    if(!checkForVictory())
    opponentTurn(); //calling opponentTurn function
};

//takeTurn function for return applicable element of array to space
const takeTurn = function(index, letter){
    return grid()[index].innerText = letter;
};

//opponentTurn function for computer player activities
const opponentTurn = function(){
    disableListeners(); //other player actions not applying
    setTimeout(function () {   //giving some time for computer player
        takeTurn(opponentChoice(), 'O'); //calling takeTurn function to display opponent choice
        if(!checkForVictory())
            enableListeners(); // again enable for other player
    }, 1000);       // waiting 1s=1000ms
};

//function for return opponentChoice
const opponentChoice =function () {
    return qNumId(emptyQs()[get_index()]); //get relevant index for emptyQs array, calling get_index() method inside it
};

function get_index(){
    var x=Math.floor(Math.random() * emptyQs().length); // calculating random and relevant no for index
    return x;
}

//winning Combs
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];


//function for check victory, this function is called after every player's turn

const checkForVictory = function(){
    let victory = false;
    winningCombos.forEach(c => {
        const grid_n = grid();
        const sequence = [grid_n[c[0]], grid_n[c[1]], grid_n[c[2]]];
        if(allSame(sequence)) {
            console.log(sequence);
            victory = true;
            endGame(sequence);
        }
    });
    return victory;
};


const allSame = function(arr) {
    return arr.every(qElement => qElement.innerText === arr[0].innerText && qElement.innerText !== '');
};


//function for endgame
const endGame = function(winningSequence){
    console.log(winningSequence);
    winningSequence.forEach(qElement => qElement.classList.add('winner'));
    disableListeners();
    document.getElementById('div').style.display='block'; //wining note

    // modal.style.display = "block";
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    document.getElementById('div').style.display='none';
};

function reset() {
    location.reload()
}


//functions for addEventListener & removeEventListener

const enableListeners=function () {
    return grid().forEach(adding);
};

function adding(qelement) {
    return qelement.addEventListener('click', clickFn);
}
const disableListeners = function() {
    return grid().forEach(removing);
};

function removing(qelement) {
    return qelement.removeEventListener('click', clickFn);
}

enableListeners();




