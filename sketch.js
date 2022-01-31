
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var wall;
var wedge;


function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(400,390,800,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  wedge = Bodies.rectangle(100, 200, 70, 20, ground_options);
  World.add(world,wedge);

  wall = Bodies.rectangle(300, 150, 100, 20, ground_options);
  World.add(world,wall);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
 // Engine.run(engine);

 //Matter.Body.rotate(wedge,angle);
  push();
  
  translate(wedge.position.x, wedge.position.y);
  rotate(angle);
  angle = angle + 0.1;
  
  rect(0,0,100,20);

  pop();

  fill("blue");
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,70,20);
 


  
  
}

