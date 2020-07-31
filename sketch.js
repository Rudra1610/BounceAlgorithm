var movingRect, fixedRect;


function setup() {

  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,50,50);

  fixedRect.velocityX=-5;
  movingRect.velocityX=5;

}

function draw() {
  background(255,255,255); 
  
  /*movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;*/

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2) {

    movingRect.shapeColor="Black";
    fixedRect.shapeColor="Black";

    fixedRect.velocityX=fixedRect.velocityX*(-1);

    movingRect.velocityX=movingRect.velocityX*(-1);

  }

  else {

    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }


  drawSprites();
}