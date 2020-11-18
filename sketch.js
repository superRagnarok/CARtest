var car,wall;
var speed,weight;
function preload(){
  testImage = loadImage("try.png");
}
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight = random(400,1500);
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor="brown";
  car = createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";

}

function draw() {
  background(0);

  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    fill("white");
    stroke("white");
    textSize(50);
    text ("RELOAD THE PAGE TO TEST AGAIN",400,height/2);
    var deformation=0.5*weight*speed*speed/22500;
    if (deformation>180){
      car.shapeColor=color(255,0,0);
      fill("red");
      stroke("red");
      textSize(40);
      text("DAMAGE LEVEL IS HIGH",400,height/4);
    }
    if (deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      fill("yellow");
      stroke("yellow");
      textSize(40);
      text("DAMAGE LEVEL IS MEDIUM",400,height/4);
    }
    if (deformation<100){
      car.shapeColor=color(0,255,0);
      fill("green");
      stroke("green");
      textSize(40);
      text("DAMAGE LEVEL IS LOW",400,height/4);
    }
  } 
   
  drawSprites();
}