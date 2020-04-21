var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var blockSize = 10;
var widthInBlocks = width/blockSize;
var heightInBlocks = height/blockSize;

var score = 0;

var drawBorder = function(){
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};


ctx.textBaseLine  = "top";
/* ctx.fillText("Hello World!", 50, 50); */

var drawScrore = function(){
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseLine = "bottom";
    ctx.fillText("Score: " + score, blockSize, blockSize);
};

var gameOver = function(){
    clearInterval(intervalId);
    ctx.font= "60px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseLine = "middle";
    ctx.fillText("Game Over:", width/2, height/2);
};

var Block = function(col,row) {
    this.col = col;
    this.row = row;
};

var sampleBlock = new Block(5, 5);

Block.prototype.drawSquare = function(color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
};

var sampleBlock = new Block(3,4);
sampleBlock.drawSquare("LightBlue");

Block.prototype.drawCircle = function (color) {
    var centerX = this.col * blockSize + blockSize/2;
    var centerY = this.row * blockSize + blockSize/2;
    ctx.fillStyle = color;
    this.drawCircle(centerX, centerY, blockSize/2, true);
};

Block.prototype.equal = function (otherblock) {
    return this.col === otherblock.col && this.row === otherblock.row;
}

var apple = new Block(2,5);
var head = new Block(3,5);
head.equal(apple);

var Snake = function() {
    this.segments = [
        new Block(7,5),
        new Block(6,5),
        new Block(5,5)
    ];

    this.direction = "right";
    this.nextDirection = "right";
};

Snake.prototype.draw = function() {
    for(var i=0; i<this.segments.length; i++){
        this.segments[i].drawSquare("Blue");
    }
};

var snake = new Snake();
snake.draw();

Snake.prototype.move = function(){
    var head = this.segments[0];
    var newHead;

    this.direction = this.nextDirection;

    if(this.direction==="right"){
        newHead = new Block(head.col +1, head.row);
    } else if (this.direction === "down") {
        newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === "left") {
        newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === "up") {
        newHead = new Block(head.col, head.row -1);
    }

    if(this.checkCollision(newHead)) {
        gameOver();
        return;
    }

    this.segments.unshift(newHead);

    if(newHead.equal(apple.position)){
        score++;
        apple.move();
    } else {
        this.segments.pop();
    }
};

Snake.prototype.checkCollision = function(head){
    var leftCollision = (head.col === 0);
    var topCollision = (head.row === 0);
    var rightCollision = (head.col === widthInBlocks - 1);
    var bottomCollision = (head.row === heightInBlocks -1);

    var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

    var selfCollision = false;

    for(var i=0; i<this.segments.length; i++){
        if(head.equal(this.segments[i])) {
            selfCollision = true;
        }
    }

    return wallCollision || selfCollision;
};

var directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

$("body").keydown(function (event) {
    var newDirection = directions[event.keyCode];

    if (newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});

Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === "up" && newDirection === "down") {
        return;
    } else if (this.direction === "right" && newDirection === "left") {
        return;
    } else if (this.direction === "down" && newDirection === "up") {
        return;
    } else if (this.direction === "left" && newDirection === "right"){
        return;
    }

    this.nextDirection = newDirection;
};

drawBorder();
drawScrore();