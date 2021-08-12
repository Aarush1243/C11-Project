var path, pathImg;
var runner, runnerMoving;
var boundry1, boundry2;

function preload() {
  pathImg = loadImage("path.png")
  runnerMoving = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup() {
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.3;
  createCanvas(400, 400);

  

  runner = createSprite(330, 300);
  runner.addAnimation("running", runnerMoving);
  runner.scale = 0.05;

  boundry1 = createSprite(30,400, 20, 800);
  boundry1.visible = false;
  boundry2 = createSprite(380, 0,20, 800);
  boundry2.visible = false;

}

function draw() {
  background(220);

  runner.x = mouseX;


  if(path.y > 400){
    path.y = height/2;
  }

  runner.collide(boundry1);
  runner.collide(boundry2);
  

  
  drawSprites();
}
