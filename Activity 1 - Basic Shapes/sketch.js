function setup() {
  createCanvas(400, 400);
  background(220);
  rectMode(CENTER)
}

function draw() {
  fill(0,0,255);
  rect(100,height/2,100,60);
  fill(0,255,0);
  ellipse(210,height/2,80);
  fill(255,0,0);
  triangle(250,250,310,150,360,250);
}