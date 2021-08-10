var ball;
var database;
var balloc;
var position1
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    balloc=database.ref("ball/position")
    balloc.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        "x":position1.x+x,
        "y":position1.y+y,
    })
}
function readposition(data){
position1=data.val();
ball.x=position1.x;
ball.y=position1.y;
}
function showerror(){
  console.log("error")  
}