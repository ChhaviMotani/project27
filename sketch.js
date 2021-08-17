
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	roof = new roof(100,100,700,30);
    bob= new bob(50,50,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob.display();

  drawSprites();
 
}



