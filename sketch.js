var mask, vaccine, sanitizer, maskImg, vaccineImg, sanitizerImg
var  girlplayer, girlplayerImg;
var crowd, crowdImg
var edge1, edge2, edge3, edge4, school, schoolImg;
var backgroundsprite, backgroundImg, virus1, virus1Img, virus2, virus2Img;
var score=0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var lives=0;


function preload(){
 girlplayerImg=loadImage("./girlplayer.gif")
  maskImg=loadImage("./mask.png")
  vaccineImg=loadImage("./vaccine.png")
  sanitizerImg=loadImage("./sanitizer.png")
 crowdImg=loadImage("./crowd.png")
backgroundImg=loadImage("./bck.jpg")
virus1Img=loadImage("./virus1.png")
virus2Img=loadImage("./virus2.png")
schoolImg=loadImage("./school.png")
}

function setup(){
var canvas = createCanvas(1300,700);

mask=createSprite(455,300,20,20)
mask.addImage("mask", maskImg)
mask.scale=0.2;
vaccine=createSprite(347,523,10,10)
vaccine.addImage("vaccine", vaccineImg)
vaccine.scale=0.08
sanitizer=createSprite(800,370,15,15)
sanitizer.addImage("sanitizer", sanitizerImg)
sanitizer.scale=0.1
girlplayer=createSprite(90,365,20,20)
girlplayer.addImage("girlplayer", girlplayerImg)
girlplayer.scale=0.55
crowd=createSprite(600, 520, 20, 20)
crowd.addImage("crowd", crowdImg)
crowd.scale=0.6
virus1=createSprite(250,200, 10, 10)
virus1.addImage("virus1",virus1Img)
virus1.scale=0.2;
virus2=createSprite(960,200, 10, 10)
virus2.addImage("virus2",virus2Img)
virus2.scale=0.2;
edge1=createSprite(600,5,2000,5)
edge2=createSprite(600,615,2000,5)
edge3=createSprite(5,299, 5,1000)
edge4=createSprite(1296,285, 5, 1000)
school=createSprite(1120,450,20,20)
school.addImage("school", schoolImg)
school.scale=0.08;
}

function draw(){ 
//image(backgroundImg, -displayWidth*4, displayHeight/2, displayWidth*4, displayHeight)
background(backgroundImg); 


if (gameState===PLAY){
   score = score + Math.round(getFrameRate()/60);
}

if(keyDown("RIGHT_ARROW") && girlplayer.y >=159) {
 girlplayer.x = girlplayer.x + 9;
 }
 if(keyDown("LEFT_ARROW") && girlplayer.y >=159) {
 girlplayer.x = girlplayer.x - 9;
 }

virus1.velocityY=10;
virus2.velocityY=-10;

virus1.bounceOff(edge1)
virus2.bounceOff(edge1)
virus1.bounceOff(edge2)
virus2.bounceOff(edge2)


girlplayer.bounceOff(edge1)
girlplayer.bounceOff(edge2)
girlplayer.bounceOff(edge3)
girlplayer.bounceOff(edge4)

if(girlplayer.isTouching(virus1, virus2)){
  lives+=1
}

if(girlplayer.isTouching(school)){
  text("YOU REACHED SCHOOL SAFELY, YOU WIN!", 200,50);
}

if(girlplayer.isTouching(virus1, virus2)){
  girlplayer.x=90;
  girlplayer.y=365;
}

text("lives=" +lives, 1072, 60)

   drawSprites();
   text(mouseX + "," + mouseY, mouseX, mouseY)
}