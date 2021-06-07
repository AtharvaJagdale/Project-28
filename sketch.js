
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new Paper()
bin1=new Bin(500,650,200,20,0)
bin2=new Bin(390,640,200,20,90)
bin3=new Bin(610,640,200,20,90)
ground1=new Ground()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper1.display()
  bin1.display()
  bin2.display()
  bin3.display()
  ground1.display()
 
}


function keyPressed(){
if (keyCode===UP_ARROW)
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-45})


}


