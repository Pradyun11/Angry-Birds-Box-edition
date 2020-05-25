const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,ground,pig1,pig2,log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,355,70,70);
    box2 = new Box(920,355,70,70);
    box3 = new Box(700,270,70,70);
    box4 = new Box(920,270,70,70);
    box5 = new Box(810,190,70,70);


    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(810,365);
    pig2 = new Pig(810,280);

    log1 = new Log(810,310,300,PI/2);
    log2 = new Log(810,225,300,PI/2);
    log3 = new Log(725,120,150,PI/4);
    log4 = new Log(875,120,150,3*PI/4);

    bird = new Bird(100,100);


}

function draw(){
    background(0);
    Engine.update(engine);

    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();



    
}