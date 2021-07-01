var ship,ship_moving;
var sea
var seaimg
var ship1,shipmoving1;
function preload(){
 ship_moving = loadAnimation("ship-1.png", "ship-2.png")
 shipmoving1 = loadAnimation("ship-1.png" , "ship-2.png")
 seaimg = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
 
  sea = createSprite(200,12,20,20)
  sea.addImage(seaimg)
  

  ship = createSprite(123,278,24,10)
  ship.addAnimation("moving" , ship_moving)
  ship.scale = 0.20002

ship1 = createSprite(300,278,20,20)
ship1.addAnimation("floating" , shipmoving1)
ship1.scale = 0.20002
  
  
}

function draw() {
  background("blue");
  drawSprites();
  sea.velocityX = -5

 if (sea.x < 0 ) {
 sea.x = sea.width/2

 }

}