
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4;
var world,boy;
var stone;
var slingShot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,110,30);
	mango2=new Mango(1090,60,30);
	mango3=new Mango(1060,140,30);
	mango4=new Mango(1120,170,30);

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	stone = new Stone(300,320,50,50);
	slingShot = new Slingshot(stone.body,{x:235,y:410});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  groundObject.display();
  stone.display();
  slingShot.display();

detectCollision(mango1,stone);
detectCollision(mango2,stone);
detectCollision(mango3,stone);
detectCollision(mango4,stone);

 keyPressed();

}




function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
	}
	
	function mouseReleased(){
	slingShot.fly();
	}

	function detectCollision(stone,mango1){
    mango1BodyPosition= mango1.body.position
	stoneBodyPosition= stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mango1BodyPosition.x,mango1BodyPosition.y )
	if(distance<= mango1.r+ stone.r)
	{
		Matter.Body.setStatic(mango1.body.false);
	}
	}


	function detectCollision(stone,mango2){
		mango2BodyPosition= mango2.body.position
		stoneBodyPosition= stone.body.position
	
		var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mango2BodyPosition.x,mango2BodyPosition.y )
		if(distance<= mango2.r+ stone.r)
		{
			Matter.Body.setStatic(mango2.body.false);
		}
		}



		function detectCollision(stone,mango3){
			mango3BodyPosition= mango3.body.position
			stoneBodyPosition= stone.body.position
		
			var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mango3BodyPosition.x,mango3BodyPosition.y )
			if(distance<= mango1.r+ stone.r)
			{
				Matter.Body.setStatic(mango3.body.false);
			}
			}









			function detectCollision(stone,mango4){
				mango4BodyPosition= mango4.body.position
				stoneBodyPosition= stone.body.position
			
				var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mango4BodyPosition.x,mango4BodyPosition.y )
				if(distance<= mango1.r+ stone.r)
				{
					Matter.Body.setStatic(mango3.body.false);
				}
				}


				function keyPressed(){
				if (keyCode=== 32){
                 matter.body.setPosition(stone.Body, {x:215,y:385}); 
                 slingShot.body.attach(stone.Body, {x:235,y:410});

				}
				}