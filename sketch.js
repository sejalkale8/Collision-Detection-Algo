var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor= " green";

  movingrect= createSprite(400,400,50,50);
  movingrect.shapeColor= "green";
}

function draw() {
  background(255,255,255);  

  
  movingrect.y= World.mouseY;
  movingrect.x= World.mouseX;

isTouching();
 
  drawSprites();
}

function isTouching(){

  if(movingrect.x- fixedrect.x< fixedrect.width/2 + movingrect.width/2&&
    fixedrect.x- movingrect.x< movingrect.width/2 + fixedrect.width/2&&
    movingrect.y- fixedrect.y< fixedrect.width/2 + movingrect.width/2&&
    fixedrect.y- movingrect.y< movingrect.width/2 + fixedrect.width/2){
    movingrect.shapeColor= "red";
    fixedrect.shapeColor= "red";
  }

  else{
    movingrect.shapeColor= "green";
    fixedrect.shapeColor= "green";

  }
}