var fixedRect, movingRect;
var car , wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  car = createSprite(400,200,40,40);
  car.velocityX = 4;
  car.shapeColor = "blue";
  
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  wall = createSprite(1000,200,20,100);
  wall.shapeColor = "red";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(car , wall)){
    car.shapeColor = "pink";
  }
  BounceOff(car,wall);
  drawSprites();
}

