var car1;
var car2;
var car3;
var car4;
var bouncer1;
var bouncer2;
var bouncer3;
var bouncer4;

var speed;
var weight;


function setup(){
    createCanvas(800,400);

car1 = createSprite(40,350,10,10);
bouncer1 = createSprite(25,350,8,60);

car2 = createSprite(40,260,10,10);
bouncer2 =  createSprite(25,260,8,60);

car3 = createSprite(40,180,10,10);
bouncer3 = createSprite(25,180,8,60);

car4 = createSprite(40,100,10,10);
bouncer4 = createSprite(25,100,8,60);

speed=random(55,90);
weight=random(400,1500); 
}



function draw(){
   background(220);
   
   
    car1.velocityX = speed;
    car2.velocityX = speed;
    car3.velocityX = speed;
    car4.velocityX= speed;
    
    drawSprites();
edges = createEdgeSprites();

car1.bounceOff(edges[1]);
car3.bounceOff(edges[1]);
car4.bounceOff(edges[1]);
car2.bounceOff(edges[1]);









}


















