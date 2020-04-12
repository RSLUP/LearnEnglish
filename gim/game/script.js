var myGamePiece;
var myObstacles = [];
var myScore;



function startGame() {

    //document.getElementById("crd").style.visibility=false;

    myGamePiece = new component(30, 30, "img/aa.png", 10, 120, "image");
    myScore = new component("25px", "Consolas", "red", 300, 240, "text");
    myGameArea.start();
  
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 250;
        this.context = this.canvas.getContext("2d");
       // this.context.rotate(-90 * Math.PI / 180);
     //  context.arc(x, y, radius, 0, 2 * Math.PI, false);
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
       

        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
   
    this.type = type;

    if(this.type=="image")
    {
        this.image=new Image();
        this.image.src=color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
       
        if(this.type=="image")
        {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

            if(this.type=="text")
            {
                ctx.font = this.width + " " + this.height;
                ctx.fillStyle = color;
              
                ctx.fillText(this.text, this.x, this.y);
            }
          
        }
        else
        {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

     
       
    }


    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight =20;
       // height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
      height =20;
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(40, height+20, "white", x, 10));
        myObstacles.push(new component(40, height+20, "white", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myScore.text="SCORE:"+ myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

window.addEventListener('keyup', (e) => {
    switch (e.key) {
       // case 'ArrowLeft':
        //	myGamePiece.speedY = 0; 
         //    myGamePiece.speedX = -1; 
         //   break;
      //  case 'ArrowRight':
       //  myGamePiece.speedY = 0; 
      //      myGamePiece.speedX = 1; 
      //      break;
        case 'ArrowUp':
            myGamePiece.speedX = 0; 
            myGamePiece.speedY = -1; 
            break;
        case 'ArrowDown':
            myGamePiece.speedX = 0; 
            myGamePiece.speedY = 1; 
            break;
    }
});


//document.getElementById("score").innerHTML= myScore.update();

