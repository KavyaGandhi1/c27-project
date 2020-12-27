
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/8,200,20);

var bobDiameter =30;

//var startBobPositionX=width/2;
//var startBobPositionY=height/4+500;

	
	//Create the Bodies Here.

	
	bobObject1=new Bob(740,500,bobDiameter);
	bobObject2=new Bob(770,500,bobDiameter);
	bobObject3=new Bob(800,500,bobDiameter);
	bobObject4=new Bob(830,500,bobDiameter);
	bobObject5=new Bob(860,500,bobDiameter);
	



chain1 = new Rope(bobObject1.body,roof.body,-60,0);
chain2 = new Rope(bobObject2.body,roof.body,-30,0);
chain3 = new Rope(bobObject3.body,roof.body,0,0);
chain4 = new Rope(bobObject4.body,roof.body,30,0);
chain5 = new Rope(bobObject5.body,roof.body,60,0);
Engine.run(engine);

}


function draw() {

  background("powderblue");
  
  drawSprites();
 roof.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();

 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-55});
	}
}



