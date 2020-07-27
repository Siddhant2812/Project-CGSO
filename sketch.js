var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,900);

  car  = createSprite(50,200,20,20);
  car.velocityX = speed;
  
  wall = createSprite(1100,200,60,height/2);
  wall.shapeColor = 80,80,80;
}

function draw() {
  background(0,0,0);

  if (car.x - wall.x < wall.width/2 + car.width/2 
    && wall.x - car.x < wall.width/2 + car.width/2 
   /* && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2*/)
    {
       car.velocityX = 0;
       var deformation = 0.5*weight*speed*speed/22500;
       if(deformation<100){
         car.shapeColor =color(0,255,0);
         car.velocityX = -1;
       }

       if(deformation>=100&&deformation<180){
         car.shapeColor = color(230,230,0);
         car.velocityX = -1;
       }

       if(deformation>180){
         car.shapeColor = color(255,0,0);
         car.velocityX = -1;
       }
    } 
  drawSprites();
}