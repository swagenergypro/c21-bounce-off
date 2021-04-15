var mrect, frect;

function setup() {
  createCanvas(1200,800);
  mrect = createSprite(400, 100, 50, 80);
  mrect.shapeColor = "green";
  mrect.debug = true;
  frect = createSprite(400, 800,80,30);
  frect.shapeColor = "green";
  mrect.debug = true;

  frect.velocityY = -5;
  mrect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(mrect,frect)
  drawSprites();
}



