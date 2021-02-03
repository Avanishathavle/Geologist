
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine, world;
var hammer,rubber,stone,ground

function setup() {
	var Canvas=createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	hammer = new hammer(700,320,70,70);
    stone = new stone(920,320,70,70);
	ground = new Ground(600,height,1200,20)
	rubber = new rubber(700,320,70,70);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  rubber.display(); 
  ground.display(); 
  stone.display(); 

  drawSprites();
 
}



