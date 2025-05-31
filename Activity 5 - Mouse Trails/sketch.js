function setup() {
  createCanvas(400, 400);
  background(220);
  colorMode(RGB);
  strokeWeight(5);
}

function draw() {
  stroke(100,mouseX,mouseY);
  fill(220)
  ellipse(mouseX,mouseY,80,80);
  
}

function mouseClicked() {
  stroke(100,random(255),random(255));
  fill(220);
  circle(mouseX,mouseY,200);
  fill(255);
  circle(mouseX-40,mouseY-20,45);
  circle(mouseX+40,mouseY-20,45);
  
  
  
}