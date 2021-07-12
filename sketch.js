const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

function preload(){
 base=loadImage("assets/base1.png")
 base2=loadImage("assets/base2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
 people=new People(200,110,70,30)
 people1=new People(380,110,90,50)

   //Create Player Base and Computer Base Object


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  image (base,330,270,150,150)
  image (base2,670,270,150,150)
   people. display()
   people1. display()

   //display Player and computerplayer


}
