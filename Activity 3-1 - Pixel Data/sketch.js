let img;

function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/2/29/Disco_ball4.jpg');
}

function setup() {
  createCanvas(600, 600);
  img.resize(width, height);
  noStroke();
}

function draw() {
  background(255);
  image(img, 0, 0, width, height);

  // Get the color of the pixel under the mouse cursor
  let c = img.get(mouseX, mouseY);

  // Draw a circle at the mouse position with the pixel color
  fill(c);
  ellipse(mouseX, mouseY, 50, 50);
}