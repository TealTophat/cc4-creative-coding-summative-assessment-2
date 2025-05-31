// All audio taken from the Free Music Archive website. "Cambodean Odessy", "Parisian", "Baltic Levity" and "Beach Party" composed by Kevin Macleod.
var mySound;
var message;
let c = 0;

//Use preload() to assign one random piece of music to the mySound variable.
function preload(){
mySound = loadSound(random(["audio/CAMBODEANODESSY.mp3","audio/PARISIAN.mp3","audio/BALTICLEVITY.mp3","audio/BEACHPARTY.mp3"]));
}

function setup() {
  createCanvas(600, 400);
  //Create a new FFT analysis
  fft = new p5.FFT();
  //Volume is a value between 0 and 1
  mySound.setVolume(1);
  //Play the audio file
  mySound.play();
  
  c = random(0,255);
}

function draw() {
  background(0);
  //Use the analyze function to find the values of each frequency
  var spectrum = fft.analyze();
  noStroke();
  //Create the Visualizer
  fill(0,255,c);
  for (var i = 0;i< spectrum.length;i++){
    var x = map(i,0,spectrum.length/2,0,width);
    var h = map(spectrum[i],0,255,0,height-50);
    rect(x,height-h,width/spectrum.length,h);
}
}