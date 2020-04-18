

    const clickFn = function($event){
    //return console.log($event.target);
    takeTurn(qNumId($event.target),'X');
    opponentTurn();
    };


    const grid=function () {
        return Array.from(document.getElementsByClassName("q"));
    };

    const qNumId = function (qEl) {
        return Number.parseInt(qEl.id.replace('q', ''));
    };

    const emptyQs=function() {
        return grid().filter(checkEmpty);
    };
    function checkEmpty(qelement){
        if(qelement.innerText==='') {
            return qelement;
        }
    }


    const takeTurn = function(index, letter){
        return grid()[index].innerText = letter
    };

    const opponentTurn = function(){
        disableListeners();
        setTimeout(function () {
            takeTurn(opponentChoice(), 'O');
            enableListeners();
        }, 1000);
    };

    const opponentChoice =function () {
        return qNumId(emptyQs()[Math.floor(Math.random() * emptyQs().length)]);
    };



    // adding eventlisteners........

    const enableListeners=function () {
        return grid().forEach(qelement => qelement.addEventListener('click', clickFn));
    };
    const disableListeners = function() {
        return grid().forEach(qelement => qelement.removeEventListener('click', clickFn));
    };

    enableListeners();


