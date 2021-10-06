const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var block1;
var back, backgroundImg;

//var bg = "bg1.jpeg";
var score = 0;

function preload(){
  //getBackgroundImg();
  backgroundImg = loadImage("bg2.jpg");
}
function setup() {
  
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(300, 330, 250, 15);
  stand2 = new Ground(600, 200, 200, 15);
  
  //row1
  block1 = new Box(210, 300);
  block2 = new Box(240, 300);
  block3 = new Box(270, 300);
  block4 = new Box(300, 300);
  block5 = new Box(330, 300);
  block6 = new Box(360, 300);
  block7 = new Box(390, 300);

  //row2
  block8 = new Box(240, 260);
  block9 = new Box(270, 260);
  block10 = new Box(300, 260);
  block11 = new Box(330, 260);
  block12 = new Box(360, 260);
  
  //row3
  block13 = new Box(270, 220);
  block14 = new Box(300, 220);
  block15 = new Box(330, 220);

  //row4
  block16 = new Box(300, 180);

  //stack2row1
  block17 = new Box(540, 170);
  block18 = new Box(570, 170);
  block19 = new Box(600, 170);
  block20 = new Box(630, 170);
  block21 = new Box(660, 170);

  //stack2row2
  block22 = new Box(570, 130);
  block23 = new Box(600, 130);
  block24 = new Box(630, 130);

  //stack2row3
  block25 = new Box(600, 90);

  
  polygon = new Polygon(50, 250, 15);

  slingshot = new SlingShot(polygon.body, {x: 80, y: 250});

}

function draw() {
  //if(backgroundImg)
        background(backgroundImg);
        
        textSize(20);
        fill("white");
        text("SCORE : "+ score, 650, 40);

  Engine.update(engine);

  stand1.display();
  stand2.display();

  fill(255, 190, 51);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  fill(15, 222, 254);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(115, 229, 20);
  block13.display();
  block14.display();
  block15.display();

  fill(196, 86, 255);
  block16.display();

  fill(15, 222, 254);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(115, 229, 20);
  block22.display();
  block23.display();
  block24.display();

  fill(255, 190, 51);
  block25.display();

  polygon.display();
  slingshot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
    slingshot.attach(polygon.body);
  }
}

//async function getBackgroundImg(){
//  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//  var responseJSON = await response.json();

//  var datetime = responseJSON.datetime;
//  var hour = datetime.slice(11,13);
  
//  if(hour>=06 && hour<=19){
//      bg = "bg1.jpeg";
//  }
//  else{
//      bg = "bg2.jpg";
//  }

//  backgroundImg = loadImage(bg);
//  console.log(backgroundImg);
//}
