
function draw() {
  background(255,255,255);  
  drawSprites();
}
function setup() {
  var car 
  var ball
  var speed , weight;

  speed=random(55,90)
  weight=random(400,1500)

  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
car.velocityX=speed;

wall=createSprite(1500,200,60,height/2)
wall.shapeColor=(80,80,80)
}
if (wall.x-car.x < (car.width +wall.width)/2
{
  car.velocityX=0;
  var deformation=0.5 *weight*speed*speed/22509;
  if (deformation>180)
  {
car.shapeColor=color(255,0,0)
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}
if (deformation<100)
{
  car.shapeColor=color(0,255,0);
}

var bullet, wall, speed, weight, damage, deformation, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  
  weight = random(30,52);
  
  bullet = createSprite (50, 200, 70, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  thickness = random(22,83);
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  

  deformation = 0.5 * weight * speed * speed/22500;

  if(wall.x - bullet.x < bullet.width/2 + wall.width/2) {
    bullet.velocityX = 0;
    if (deformation < 100) {
      bullet.shapeColor = color(0,255,0);
    }
    if (deformation > 100 && deformation < 180) {
      bullet.shapeColor = color(230,230,0);
    }
    if (deformation > 180) {
      bullet.shapeColor = color(255,0,0);
    }
  }

  if(collide(bullet, wall)) {
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage > 10) {
      wall.shapeColor = color(255,0,0);
    }

    else if(damage < 10) {
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}