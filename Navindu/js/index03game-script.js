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
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.beginPath();
        ctx.arc(snake[i].x+tile/2,snake[i].y+tile/2,tile/2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = "red";
        ctx.stroke();
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
        correctFood = {
            x : Math.floor(Math.random()*20) * tile,
            y : Math.floor(Math.random()*20) * tile
        };
        
        wrongFood = {
            x : Math.floor(Math.random()*20) * tile,
            y : Math.floor(Math.random()*20) * tile
        };
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
    }

    snake.unshift(newHead);
    
    document.getElementById("score").innerHTML=score;
}

let game = setInterval(mainProcess,100);