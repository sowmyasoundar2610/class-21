var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  var ans;
  box = createSprite(500,500, 100,50);
  box.shapeColor = "red";
  box.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   
  ans = isTouching(movingRect,box);
  if(ans){
    movingRect.shapeColor = "blue";
    box.shapeColor = "blue";
  } else{
    movingRect.shapeColor = "green";
    box.shapeColor = "green";
  }


function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
      && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
        return true;
  }
  else {
    return false;
  }
}

  drawSprites();
}