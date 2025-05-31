let img;

function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg');
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  img.resize(width, height);
  image(img, width / 2, height / 2);
  filter(POSTERIZE, 4); // Adjust the number for more/less posterization
}