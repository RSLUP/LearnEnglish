const canvs = document.getElementById("snake");
const ctx = canvs.getContext("2d");

const tile = 30;
let score = 0;

const ground = new Image();
ground.src = "img/game-grid.png";

const FoodRat = new Image();
foodImg.src = "img/game-rat.png";

const FoodFrog = new Image();
foodImg.src = "img/game-frog.png";

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
}

let wrongFood = {
    x : Math.floor(Math.random()*20) * tile,
    y : Math.floor(Math.random()*20) * tile
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