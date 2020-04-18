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
};

//takeTurn function for return applicable element of array to space
const takeTurn = function(index, letter){
    return grid()[index].innerText = letter;
};


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




