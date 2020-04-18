
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




