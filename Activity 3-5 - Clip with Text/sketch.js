function setup() {
  createCanvas(400, 400);
  background(220);
  ellipseMode(CENTER);
}

function draw() {
  //Creates an ellipse
  fill(0,0,255);
  ellipse(200,200,300);
  
  //Creates a mask that is applied to the text
  mask3=createGraphics(width,height);
  mask3.fill(200,0,0);
  mask3.rect(200,200,200);
  mask3.erase();
  mask3.textSize(100);
  mask3.text('two',200,350);
  mask3.noErase();
  image(mask3,0,0);
  
}