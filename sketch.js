var walls, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12;
var room1img, room2img, room3img, room4img;
var chest, sharkL,sharkR;
var chestimg, sharkimg;
var fishimg, foodimg, fishflipimg;
var player,scubaimage;
var wall13,wall14,wall15,wall16;
var walldoor1, walldoor2, walldoor3, walldoor4;
var walls=[];
var gameState=0;
var trash1, trash2,trash3, trash4, trash5, trashcan;
var bagimg, bottleimg, trashcanimg;
var clue1, clue2, clue3, clue4;
var clueimg;
var counter=0;
var squid1, squid2, squid3;
var squidimg;

function preload(){
  bagimg=loadImage("Images/trash1.png");
  bottleimg=loadImage("Images/trash2.png");
  trashcanimg=loadImage("Images/trashcan.png");
  room1img=loadImage("Images/Room1.gif");
  room2img=loadImage("Images/Room2.gif");
  room3img=loadImage("Images/Room3.gif");
  room4img=loadImage("Images/Room4.gif");
  chestimg=loadImage("Images/chest.png");
  sharkimg=loadImage("Images/sharks.png");
  fishimg=loadImage("Images/fish.png");
  foodimg=loadImage("Images/food.png");
  scubaimage=loadImage("Images/scubadiver.png");
  fishflipimg=loadImage("Images/fishflip.png");
  clueimg=loadImage("Images/clues.png");
  squidimg=loadImage("Images/squid.png");

}



function setup() {
  createCanvas(1600, 700);
  wall1=createSprite(535, 50, 5, 100);
  wall2=createSprite(535, 250, 5, 100);
  wall3=createSprite(265, 300, 540, 5);
  wall4=createSprite(1070, 150, 5, 300);
  wall5=createSprite(1170, 300, 200, 5);
  wall6=createSprite(1500, 300, 200, 5);
  wall7=createSprite(80, 400, 200, 5);
  wall8=createSprite(410, 400, 250, 5);
  wall9=createSprite(535, 550, 5, 300);
  wall10=createSprite(1340, 400, 540, 5);
  wall11=createSprite(1070, 450, 5, 100);
  wall12=createSprite(1070, 650, 5, 100);
  //walldoor1=createSprite(535, 150, 5, 50);
  chest=createSprite(800, 350);
  chest.addImage(chestimg);
  chest.scale=0.5;
  sharkL=createSprite(700,350);
  sharkL.addImage(sharkimg)
  sharkL.scale=0.5
  sharkR=createSprite(900,350);
  sharkR.addImage(sharkimg)
  sharkR.mirrorX(-1);
  sharkR.scale=0.5
  player=createSprite(800,50);
  player.addImage(scubaimage);
  player.scale=0.15;
  wall13=createSprite(800,250,300,5);
  wall14=createSprite(650,360,5,300);
  wall15=createSprite(800,450,300,5);
  wall16=createSprite(950,360,5,300);
  trash1=createSprite(40, 350, 5, 5);
  trash1.addImage(bagimg);
  trash1.scale=0.25;
  trash2=createSprite(985, 622, 5, 5);
  trash2.addImage(bottleimg);
  trash2.scale=0.15;
  trash3=createSprite(800, 480, 5, 5);
  trash3.addImage(bagimg);
  trash3.scale=0.25;
  trash4=createSprite(1135, 350, 5, 5);
  trash4.addImage(bottleimg);
  trash4.scale=0.15;
  trash5=createSprite(925, 45, 5, 5);
  trash5.addImage(bagimg);
  trash5.scale=0.25;
  clue1=createSprite(134, 241, 5, 5);
  clue1.addImage(clueimg);
  clue1.scale=0.10;
  wall13.visible=false;
  wall14.visible=false;
  wall15.visible=false;
  wall16.visible=false;
  edges=createEdgeSprites();
  
}

function draw() {
  background('#F5CD5E');  
  image(room3img,0,400,535,300);
  image(room4img,1070, 400,535,300);
  image(room2img,1070, 0,535,300);
  image(room1img, 0,0,535,300);
  image(fishimg, 975, 70,110,70);
  image(fishflipimg, 1487, 334, 90 , 50);
  image(fishimg, 595, 577, 110, 70);
  image(fishflipimg, 230, 50, 90, 50);
  

  //moving the player with arrow keys
  if(keyDown(LEFT_ARROW)){
    player.x -=10;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x +=10;
  }
  if(keyDown(UP_ARROW)){
    player.y -=10;
  }
  if(keyDown(DOWN_ARROW)){
    player.y +=10;
  }

  if(player.isTouching(clue1)){
    alert("Pick up trash to open the next room");
    player.y=50;
    clue1.destroy();
  }
  //picking up trash
  
  if(player.isTouching(trash1)){
    trash1.destroy();
    counter+=1
  }
  if(player.isTouching(trash2)){
    trash2.destroy();
    counter+=1
  }
  if(player.isTouching(trash3)){
    trash3.destroy();
    counter+=1
  }
  if(player.isTouching(trash4)){
    trash4.destroy();
    counter+=1
  }
  if(player.isTouching(trash5)){
    trash5.destroy();
    counter+=1
  }
if(counter===5){
  player.x=1568
  player.y=32
}


  //Colliding with walls
  wallcolide(player);
  player.collide(edges);
  drawSprites();
  
  text(mouseX +" "+ mouseY, 800, 200);
}

function wallcolide(plr){
  plr.collide(wall1);
  plr.collide(wall2);
  plr.collide(wall3);
  plr.collide(wall4);
  plr.collide(wall5);
  plr.collide(wall6);
  plr.collide(wall7);
  plr.collide(wall8);
  plr.collide(wall9);
  plr.collide(wall10);
  plr.collide(wall11);
  plr.collide(wall12);
  plr.collide(wall13);
  plr.collide(wall14);
  plr.collide(wall15);
  plr.collide(wall16);

  
}