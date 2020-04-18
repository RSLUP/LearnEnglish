const grid=function () {
    return Array.from(document.getElementsByClassName("q"));
};

const clickFn = function($event){
    return console.log($event.target);
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




