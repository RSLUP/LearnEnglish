    const winningCombs =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ];

    const grid=function () {
        return Array.from(document.getElementsByClassName("q"));
    };

    const clickFn = function($event){
        //return console.log($event.target);
    };


    const enableListeners=function () {
        return grid().forEach(_qEl => _qEl.addEventListener('click', clickFn));
    };
    const disableListeners = function() {
        return grid().forEach(_qEl => _qEl.removeEventListener('click', clickFn));
    };

    enableListeners();

    // const qNumID=function () {
    //
    // }
    //
    // const emptyQs = function() {
    //     return grid().filter(_qEl => _qEl.innerText === '');
    // }
    //
    // const allSame = function(arr){
    //     return arr.every(_qEl => _qEl.innerText === arr[0].innerText && _qEl.innerText !== '');
    // }
    //
    // const takeTurn =function(index, letter) {
    //     return grid()[index].innerText = letter;
    // }
    // const opponentChoice = function() {
    //     return qNumId(emptyQs()[Math.floor(Math.random() * emptyQs().length)]);
    // }

    
