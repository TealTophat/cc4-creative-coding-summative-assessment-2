function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  //Alien head + Arms
  fill(0,255,0);
  ellipse(width/2,height/2,300,250);
  ellipse((width/2)+90,(height/2)-70,50,200);
  ellipse((width/2)-90,(height/2)-70,50,200);
  push();
  rotate(30);
  ellipse((width/2)-30,(height/2)-70,50,200); 
  rotate(300);
  ellipse((width/2)-30,(height/2)+140,50,200); 
  pop();
  //Alien face
  fill(0,0,255);
  ellipse(130,150,80,40);
  ellipse(270,150,80,40);
  fill(255,0,50);
  triangle(100,200,200,230,300,200);
}