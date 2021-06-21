var player, pStand,pRunL,pRunR,pJump,pSlide,pFall,pLanding;
var bg, bgImg;
var edges;


function preload(){
    bgImg = loadImage("image/mountain.jpg");
    pStand = loadAnimation("image/pStand.png","image/pBlink.png");
    pRunL = loadAnimation("image/pRun.png","image/pLeft.png");
    pRunR = loadAnimation("image/pRun.png","image/pRight.png");
    pJump = loadImage("image/pJump1.png");
    pLanding = loadAnimation("image/pJump2.png","image/pJump3.png")
    pSlide = loadImage("image/pSlide.png");
    pFall = loadImage("image/pFall.png");
    
}

function setup(){
createCanvas(1000, 700);

//edges = createEdgeSprite();

bg = createSprite(500, 500, 500, 350);
bg.addImage(bgImg);
bg.scale = 4;
bg.velocityY=+0.6;

player = createSprite(100, 200, 10, 10);
player.addAnimation("standing",pStand);
player.changeAnimation("standing");

}

function draw(){
background(0);

edges = createEdgeSprites();

if(bg.y>400){
    bg.y=bg.height/2;
}

if(keyWentDown("space")){
    player.velocityY -=3;
    
    player.addImage(pJump);  

}

player.velocityY +=0.5;

player.collide(edges);

// if(keyWentUp("space")){
//     player.addAnimation("land",pLanding);
//     player.changeAnimation("land");  
// }

if(keyDown(LEFT_ARROW)){
    player.x -=3;
    player.addAnimation("run",pRunL);
    player.changeAnimation("run");
}

if(keyDown(RIGHT_ARROW)){
    player.y -=6;
    player.x +=6;
    player.addAnimation("run",pRunR);
    player.changeAnimation("run");
}

drawSprites();
}