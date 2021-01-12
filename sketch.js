const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

function setup() {

  createCanvas(1516, 725);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2, 685, width, 25);
  Platform1=new Ground(500, 500, 280, 25);
  Platform2=new Ground(1000,400,190,25);


  block1 = new Box1(395, 440, 30, 40);
  block2 = new Box1(425, 440, 30, 40);
  block3 = new Box1(455, 440, 30, 40);
  block4 = new Box1(485, 440, 30, 40);
  block5 = new Box1(515, 440, 30, 40);
  block6 = new Box1(545, 440, 30, 40);
  block7 = new Box1(575, 440, 30, 40);
  block8 = new Box1(605, 440, 30, 40);

  block9 = new Box2(410, 395, 30, 40);
  block10 = new Box2(440, 395, 30, 40);
  block11 = new Box2(470, 395, 30, 40);
  block12 = new Box2(500, 395, 30, 40);
  block13 = new Box2(530, 395, 30, 40);
  block14 = new Box2(560, 395, 30, 40);
  block15 = new Box2(590, 395, 30, 40);

  block16 = new Box3(425, 350, 30, 40);
  block17 = new Box3(455, 350, 30, 40);
  block18 = new Box3(485, 350, 30, 40);
  block19 = new Box3(515, 350, 30, 40);
  block20 = new Box3(545, 350, 30, 40);
  block21 = new Box3(575, 350, 30, 40);

  block22 = new Box4(440, 305, 30, 40);
  block23 = new Box4(470, 305, 30, 40);
  block24 = new Box4(500, 305, 30, 40);
  block25 = new Box4(530, 305, 30, 40);
  block26 = new Box4(560, 305, 30, 40);

  block27 = new Box5(455, 260, 30, 40);
  block28 = new Box5(485, 260, 30, 40);
  block29 = new Box5(515, 260, 30, 40);
  block30 = new Box5(545, 260, 30, 40);

  block31 = new Box6(470, 215, 30, 40);
  block32 = new Box6(500, 215, 30, 40);
  block33 = new Box6(530, 215, 30, 40);
  
  block34 = new Box7(485, 170, 30, 40);
  block35 = new Box7(515, 170, 30, 40);

  block36 = new Box8(500, 125, 30, 40);

  block37 = new Box4(940, 340, 30, 40);
  block38 = new Box4(970, 340, 30, 40);
  block39 = new Box4(1000, 340, 30, 40);
  block40 = new Box4(1030, 340, 30, 40);
  block41 = new Box4(1060, 340, 30, 40);

  block42 = new Box5(955, 295, 30, 40);
  block43 = new Box5(985, 295, 30, 40);
  block44 = new Box5(1015, 295, 30, 40);
  block45 = new Box5(1045, 295, 30, 40);

  block46 = new Box6(970, 250, 30, 40);
  block47 = new Box6(1000, 250, 30, 40);
  block48 = new Box6(1030, 250, 30, 40);
  
  block49 = new Box7(985, 205, 30, 40);
  block50 = new Box7(1015, 205, 30, 40);

  block51 = new Box8(1000, 170, 30, 40);




  

  pentagon=new polygon(200,390,20);

  sling=new SlingShot(pentagon.body,{x:180,y:390})
}

function draw() {

  background(171, 255, 203); 

  

  Engine.update(engine);
  
  Platform1.display();
  Platform2.display();
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  block27.display();
  block28.display();
  block29.display();
  block30.display();

  block31.display();
  block32.display();
  block33.display();

  block34.display();
  block35.display();

  block36.display();

  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();

  block42.display();
  block43.display();
  block44.display();
  block45.display();

  block46.display();
  block47.display();
  block48.display();

  block49.display();
  block50.display();

  block51.display();



  pentagon.display();

  sling.display();

  fill("red");
  strokeWeight(0);
  textSize(50)
  text("Tower Siege-1", width/2 - 200, 75)
  
}


function mouseDragged()
{
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
   sling.fly();
}

function keyPressed(){
  if(keyCode===32)
  {
    Matter.Body.setPosition(pentagon.body,{x:175,y:390});
    sling.attacher(pentagon.body);
  }
}