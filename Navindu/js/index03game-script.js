const canvs = document.getElementById("snake");
const ctx = canvs.getContext("2d");

const tile = 30;
let score = 0;

const grid = new Image();
grid.src = "img/game-grid.png";

const FoodRat = new Image();
FoodRat.src = "img/game-rat.png";

const FoodFrog = new Image();
FoodFrog.src = "img/game-frog.png";

var correctFoodImg = FoodRat;
var wrongFoodImg = FoodFrog;

let snake = [];
snake[0] = {
    x : 10 * tile,
    y : 10 * tile
};

let correctFood = {
    x : Math.floor(Math.random()*20) * tile,
    y : Math.floor(Math.random()*20) * tile
};

let wrongFood = {
    x : Math.floor(Math.random()*20) * tile,
    y : Math.floor(Math.random()*20) * tile
};

function foodGen(correctImg,wrongImg){

    correctFoodImg = correctImg;
    wrongFoodImg = wrongImg;

    correctFood = {
        x : Math.floor(Math.random()*20) * tile,
        y : Math.floor(Math.random()*20) * tile
    };
    
    wrongFood = {
        x : Math.floor(Math.random()*20) * tile,
        y : Math.floor(Math.random()*20) * tile
    };
}

function questionGen(Q,A1,A2){
    document.getElementById("question").innerHTML=Q;
    document.getElementById("ans1").innerHTML=A1;
    document.getElementById("ans2").innerHTML=A2;
}

let drctnKey;
function direction(event){

    let key = event.keyCode;

    if( key == 37 && drctnKey != "r"){
        drctnKey = "l";
    }
    else if(key == 38 && drctnKey != "d"){
        drctnKey = "u";
    }
    else if(key == 39 && drctnKey != "l"){
        drctnKey = "r";
    }
    else if(key == 40 && drctnKey != "u"){
        drctnKey = "d";
    }
}
document.addEventListener("keydown",direction);

function dead(head,body){
    for(let i = 0; i < body.length; i++){
        if(head.x == body[i].x && head.y == body[i].y){
            return true;
        }
    }
    return false;
}

function mainProcess(){

    ctx.drawImage(grid,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "red" : "yellow";
        ctx.beginPath();
        ctx.arc(snake[i].x+tile/2,snake[i].y+tile/2,tile/2, 0, 2 * Math.PI);
        ctx.fill();
    }

    ctx.drawImage(correctFoodImg, correctFood.x, correctFood.y);
    ctx.drawImage(wrongFoodImg, wrongFood.x, wrongFood.y);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    if( drctnKey == "l") snakeX -= tile;
    if( drctnKey == "r") snakeX += tile;
    if( drctnKey == "u") snakeY -= tile;
    if( drctnKey == "d") snakeY += tile;
    
    if(snakeX == correctFood.x && snakeY == correctFood.y){
        score++;
        if(score==1){
            questionGen("The word \"Dog\" is a ..........","Verb","Noun");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==2){
            questionGen("Example for a Verb is ........","France","Run");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==3){
            questionGen("The word \"Chair\" is a ..........","Noun","Adjective");
            foodGen(FoodRat,FoodFrog);
        }
        else if(score==4){
            questionGen("The word \"will\" is used in ........ tenses","Past","Future");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==5){
            questionGen("Example for a Pronoun is ........","Catch","Them");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==6){
            questionGen("The word \"And\" is a ..........","Conjunction","Noun");
            foodGen(FoodRat,FoodFrog);
        }
        else if(score==7){
            questionGen("The word \"Between\" is a ..........","Verb","Preposition");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==8){
            questionGen("\"He draws.\" is an example for ........ tense","Past perfect","Simple present");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==9){
            questionGen("\"I said.\" is an example for ........ tense","Simple Past","Simple Future");
            foodGen(FoodRat,FoodFrog);
        }
        else if(score==10){
            questionGen("\"We'll win.\" is an example for ........ tense","Simple Future","Future Perfect");
            foodGen(FoodRat,FoodFrog);
        }
        else if(score==11){
            questionGen("Example for Simple Past tense is ........","We won.","He write.");
            foodGen(FoodRat,FoodFrog);
        }
        else if(score==12){
            questionGen("\"Sara work at home.\"<br>Is this grammatically correct?","Yes","No");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==13){
            questionGen("Example for a Pronoun is ........","Car","You");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==14){
            questionGen("\"He ran quickly.\"<br>What is the Adverb? ","quickly","ran");
            foodGen(FoodRat,FoodFrog);
        }
        else if(score==15){
            questionGen("\".......\" is an Adjective but \".......\" is an Adverb.","softly,soft","soft,softly");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==16){
            questionGen("\"Ben is an adorable baby.\"<br>What is the Adjective?","baby","adorable");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==17){
            questionGen("\"I\'m doing exercises.\"<br>What is the tense?","Present Continuous","Present Perfect");
            foodGen(FoodRat,FoodFrog);
        }
        else if(score==18){
            questionGen("\"He had written the essay.\"<br>What is the tense?","Simple Past","Past Perfect");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==19){
            questionGen("\"I will be running the race tomorrow.\"<br>What is the tense?","Future Perfect","Future Continuous");
            foodGen(FoodFrog,FoodRat);
        }
        else if(score==20){
            clearInterval(game);
            modal.style.display="block";
            modalTitle.innerHTML="You Win!";
            modalBody.innerHTML="Well done!<br><p style='font-size:100px;margin:-15px'>&#128548</p>";
            button.innerHTML="Play Again";
            button.addEventListener("click",restartfunction);
        }
        
    }
    else{
        snake.pop();
    }
    
    let newHead = {
        x : snakeX,
        y : snakeY
    };

    if(snakeX < 0 || snakeX > 19*tile || snakeY < 0 || snakeY > 19*tile || dead(newHead,snake)){
        clearInterval(game);
        modal.style.display="block";
        modalTitle.innerHTML="You Lose!";
        modalBody.innerHTML="You killed the snake.<br><p style='font-size:100px;margin:-15px'>&#128557</p>";
        button.innerHTML="Restart";
        button.addEventListener("click",restartfunction);
    }

    if(snakeX == wrongFood.x && snakeY == wrongFood.y){
        clearInterval(game);
        modal.style.display="block";
        modalTitle.innerHTML="You Lose!";
        modalBody.innerHTML="You ate the wrong food.<br><p style='font-size:100px;margin:-15px'>&#128557</p>";
        button.innerHTML="Restart";
        button.addEventListener("click",restartfunction);
    }

    snake.unshift(newHead);
    
    document.getElementById("score").innerHTML=score*5;
}

let game;

var modal = document.getElementById("Modal");
var button = document.getElementById("button");
var modalTitle = document.getElementById("modalTitle");
var modalBody = document.getElementById("modalBody");


function infoAndSessionCheck(){
    //Session check
    var sessionDate = new Date();
    var logDate = localStorage.getItem("logDateCheck");
    var logUser = localStorage.getItem("logUser");
    var logTime = localStorage.getItem("logTimeDisplay");
    if(logDate==null || sessionDate.toDateString() != logDate){
        alert("Session Expired \n Please login!");
        window.location.href = "index00.html";
    }

    //Game Instructions
    modal.style.display="block";
    button.addEventListener("click",startfunction);
}

function startfunction(){
    modal.style.display="none";
    game = setInterval(mainProcess,200);
}

function restartfunction(){
    location.reload();
}