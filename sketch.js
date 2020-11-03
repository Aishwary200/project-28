
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var boy,boyImg;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var rope;
function preload()
{
  boyImg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(650,490,300,400)
	ground=new Ground(400,690,800,20)
	stone=new Stone(150,560,50)
	boy=createSprite(200,620,20,50);
	boy.addImage("boy",boyImg)
	boy.scale=0.1
	rope=new Chain(stone.body,{x:150,y:560})
	mango1=new Mango(620,450,35);
	mango2=new Mango(760,420,35);
	mango3=new Mango(680,380,35);
	mango4=new Mango(600,400,35)
	mango5=new Mango(710,430,35)

	Engine.run(engine);
   
}


function draw() {
  
  Engine.update(engine);
  rectMode(CENTER);
  
  background("white");
  ground.display();
  tree.display();
  drawSprites();
  rope.display(); 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	}
	function mouseReleased(){
		rope.fly();
		
	}
function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position

 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=lmango.r+lstone.r){
	 Matter.body.setStatic(lmango.body,false)
 }

}


