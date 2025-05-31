//Declares variable Size for consistency in measurements
var Size= 80;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
//Translate elements according to their size to make spacing
  translate(Size/4, Size/4); 
  for(var x = 0; x < width; x += Size) {  for(var y = 0; y < height; y += Size) {
//Bottom layer squares
  fill(0,255,255);
  rect(x, y, Size, Size);
//Top layer squares
  fill(255,100,100);
  rect(x-10, y-10, Size* 0.8, Size* 0.8);
}
}

}