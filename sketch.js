const Bodies= Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine
const Constraint=Matter.Constraint
var backgroundImg
score=0

function preload() {
  //backgroundImg = loadImage("the.jpg");
  //getTime()
}
function setup() {
  createCanvas(800,400);
  
  engine=Engine.create()
  world=engine.world
  ground1 = new Ground(400,390,800,20)
  polygon = Bodies.circle(50,200,40)
  World.add(world,polygon)
  slingshot = new Slingshot(this.polygon,{x:100,y:200})
  box1 = new Box(200,275,30,40)
  box2 = new Box(230,275,30,40)
  box3 = new Box(260,275,30,40)
  box4 = new Box(290,275,30,40)
  box5 = new Box(320,275,30,40)
  box6 = new Box(350,275,30,40)
  box7 = new Box(380,275,30,40)
  box8 = new Box(230,235,30,40)
  box9 = new Box(260,235,30,40)
  box10 = new Box(290,235,30,40)
  box11 = new Box(320,235,30,40)
  box12 = new Box(350,235,30,40)
  box13 = new Box(260,195,30,40)
  box14 = new Box(290,195,30,40)
  box15 = new Box(320,195,30,40)
  box25 = new Box(290,155,30,40)
  stand1= new Stand(290,300,250,10)
  stand2 = new Stand(600,200,200,10)
  box16 = new Box(540,175,30,40)
  box17 = new Box(570,175,30,40)
  box18 = new Box(600,175,30,40)
  box19 = new Box(630,175,30,40)
  box20 = new Box(660,175,30,40)
  box21 = new Box(570,135,30,40)
  box22 = new Box(600,135,30,40)
  box23 = new Box(630,135,30,40)
  box24 = new Box(600,95,30,40)
  
  
  
  

}

function draw() {
  Engine.update(engine)
  
  background(255);
  box1.display() 
  box2.display() 
  box3.display()
  box4.display() 
  box5.display() 
  box6.display() 
  box7.display() 
  box8.display() 
  box9.display() 
  box10.display() 
  box11.display() 
  box12.display() 
  box13.display() 
  box14.display() 
  box15.display() 
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  ground1.display()
  stand1.display()
  stand2.display()
  slingshot.display()
  ellipse(polygon.position.x,polygon.position.y,40)
  /*box1.score() 
  box2.score() 
  box3.score()
  box4.score() 
  box5.score() 
  box6.score() 
  box7.score() 
  box8.score() 
  box9.score() 
  box10.score() 
  box11.score() 
  box12.score() 
  box13.score() 
  box14.score() 
  box15.score() 
  box16.score()
  box17.score()
  box18.score()
  box19.score()
  box20.score()
  box21.score()
  box22.score()
  box23.score()
  box24.score()
  box25.score()*/
  text ("SCORE:"+score,730,50)
  drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode===32){
  slingshot.attach(this.polygon)
  }
}
