var bullet,wall;
var speed,weight;
function setup() {
  createCanvas(1400,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
 bullet =  createSprite(100, 200, 20, 3);
 wall = createSprite(1200,200,thickness,height/2)
}

function draw() {
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");
  if(hasCollided(bullet,wall)){
    bullet.velocity=0;
    bullet.x=wall.x;
    var deformation =0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(deformation>10){
      wall.shapeColor=color("red");
    }
    if(deformation<10){
      wall.shapeColor=color("green");
    }
  }
  background(0);  
  drawSprites();
}
function hasCollided(shape1,shape2){
  if(bullet.x>wall.x){
    return true
  }else{
    return false
  }
}