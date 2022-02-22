var garden,rabbit;
var gardenImg,rabbitImg;
var orange, red;
var orangeImg, redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;

  if (frameCount %80 == 0){
    if (sprite == 1){
      createapple();
    }
    else if (sprite == 2){
      createorange();
    }else {
      createred();
    }
  }
  var sprite = Math.round(random(1, 3));
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
function createorange() {
  orange = createSprite (random(50, 350),40, 10, 10);
  orange.addImage (orangeImg);
  orange.scale = 0.1;
  orange.velocityY = 3;
  orange.lifetime = 150;
}
function createred() {
  red = createSprite (random(50, 350),40, 10, 10);
  red.addImage (redImg);
  red.scale = 0.1;
  red.velocityY = 3;
  red.lifetime = 150;
}
function createapple() {
  apple = createSprite (random(50, 350),40, 10, 10);
  apple.addImage (appleImg);
  apple.scale = 0.1;
  apple.velocityY = 3;
  apple.lifetime = 150;
}