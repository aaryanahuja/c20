function setup() {
  createCanvas(800,400);
  movingRect=  createSprite(400, 200, 50, 50);
  fixRect=createSprite(200,200,80,30);
  movingRect.shapeColor="green"
  fixRect.shapeColor="green"
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
if(movingRect.x - fixRect.x<movingRect.width/2 + fixRect.width/2&&
  fixRect.x - movingRect.x<movingRect.width/2 + fixRect.width/2&&
  movingRect.y - fixRect.y<movingRect.height/2 + fixRect.height/2&&
  fixRect.y - movingRect.y<movingRect.height/2 + fixRect.height/2) {
  movingRect.shapeColor="red"
  fixRect.shapeColor="red"

}
else{
  movingRect.shapeColor="green"
  fixRect.shapeColor="green"
}
  drawSprites();
}