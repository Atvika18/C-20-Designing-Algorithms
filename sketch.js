var movingRect, fixedRect;
function setup() {
  createCanvas(1200,1200);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(400,100,50,80);

movingRect.velocityY = -5;
fixedRect.velocityY= 5;

  movingRect.shapeColor = 'green';
  fixedRect.shapeColor = 'green';

  movingRect.debug= true;
  fixedRect.debug = true;
}

function draw() {
  background(255,255,255);  
//movingRect.x = mouseX;
//movingRect.y = mouseY;
/*
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
{
movingRect.shapeColor = 'red';
fixedRect.shapeColor = 'red';
}
else 
{
  movingRect.shapeColor = 'green';
  fixedRect.shapeColor = 'green';
}
*/
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 )
  {

  } 
  if ( movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
  {
    movingRect.velocityY = movingRect.velocityY*-1;
    fixedRect.velocityY = fixedRect.velocityY*-1;
  }

  drawSprites();
}