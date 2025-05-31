//Declare variable for later
let img;

//Preloads image for use
function preload() {
  img=loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background(190,220,250);
  img.resize(250,250);
  //Creates mask in the shape of a circle
  let mask1 = createGraphics(200,200);
    ctx1=mask1.canvas.getContext("2d");
    mask1.circle(100,100,200);
    ctx1.clip();
    mask1.image(img,0,0);
    image(mask1,200,200);
}