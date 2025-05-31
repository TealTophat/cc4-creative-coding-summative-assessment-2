// Array of song objects with title and URL
let songs = [
  { title: 'Kevin MacLeod - A Little Faith', url: 'audio/alittlefaith.mp3', img: 'image/classicalsampler.png' },
  { title: 'Kevin MacLeod - Dirt Rhodes', url: 'audio/dirtrhodes.mp3', img: 'image/bluessampler.png' },
  { title: 'Kevin MacLeod - Isolated', url: 'audio/isolated.mp3', img: 'image/contemporarysampler.png' },
  { title: 'Kevin MacLeod - Monkeys Spinning Monkeys', url: 'audio/monkeysspinningmonkeys.mp3', img: 'image/bestof2014.png' },
  { title: 'Kevin MacLeod - Narcissus', url: 'audio/narcissus.mp3', img: 'image/oddities.png' },
  { title: 'Kevin MacLeod - Reaching Out', url: 'audio/reachingout.mp3', img: 'image/calming.png' },
  { title: 'Kevin MacLeod - Sinfonia 3', url: 'audio/sinfonia3.mp3', img: 'image/oddities.png' },
  { title: 'Kevin MacLeod - The Forest and the Trees', url: 'audio/theforestandthetrees.mp3', img: 'image/contemporarysampler.png' }
];

let currentSongIndex = 0;
let song;
let fft;
var visualizerText = "a";
var textScroll = -600;

function preload() {
  // Load the current song
  song = loadSound(songs[currentSongIndex].url);
  cover = loadImage(songs[currentSongIndex].img);
  
}

function setup() {
  rectMode(CENTER);
  imageMode(CENTER);
  createCanvas(520, 400);
  fft = new p5.FFT();
  song.onended(nextSong);
}

function draw() {
  background(0);
  jukeboxVisuals();
  jukeboxText();
  
  //Create the Jukebox Body
  fill(100,0,200);
  noStroke();
  rect(300,10,600,30);
  rect(300,300,600,200);
  rect(20,120,40,200);
  rect(505,120,40,200);
  fill(255,0,255);
  textSize(30);
  textAlign(CENTER)
  text("JUKEBOX SUPREME",width/2,230);
  
  jukeboxButtons();
}

function jukeboxVisuals(){
  if(song.isPlaying()){
  fft.analyze();
  amp = fft.getEnergy(1,200);
  image(cover, width/2,100,80+amp/10,80+amp/10);
  }
  noFill();
  stroke(random(50,255),random(255),random(50,255));
  strokeWeight(2);
  //Create waveform
  var wave = fft.waveform();
  beginShape();
  for (var i = 0; i < 450; i++){
    var index = floor(map(i,0,width,0,wave.length));
    var x = i+35;
    var y = (wave[index] * 80 + height / 2)-80;
    vertex(x,y);
  }
  endShape();
  
}

function jukeboxText(){
  
  // Display the current song title
  fill(255);
  textSize(10);
  strokeWeight(1);
  textAlign(LEFT)
  if(song.isPlaying()){
    if(currentSongIndex < songs.length-1){
     text("Up next: "+songs[currentSongIndex+1%songs.length].title, textScroll,40);}else{
       text("Up next: "+songs[0].title,textScroll,40);
     }
  textScroll += 1.5;
  if(textScroll > width + songs[currentSongIndex].title.length){
    textScroll = 0 - width;
  }
    fill(255);
    textAlign(CENTER);
    text("Now playing: "+songs[currentSongIndex].title, width/2, 165 +(amp/25));
  
  }
}

function jukeboxButtons(){
  //draw buttons
  fill(255,255,0)
  rect(150,270,200,50);
  rect(380,270,200,50);
  rect(150,350,200,50);
  rect(380,350,200,50);
  fill(100,0,100);
  text('Play/Pause',150,280);
  text('Next',380,280);
  text('Previous',150,360);
  text('Random',380,360);
  textSize(10);
  text('(1)',150,290);
  text('(2)',380,290);
  text('(3)',150,370);
  text('(4)',380,370);
}

function playPause() {
  // Toggle play/pause
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function nextSong() {
  // Play the next song in the list
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  song.stop();
  song = loadSound(songs[currentSongIndex].url, () => song.play());
  cover = loadImage(songs[currentSongIndex].img);
}

function previousSong() {
  // Play the previous song in the list
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  song.stop();
  song = loadSound(songs[currentSongIndex].url, () => song.play());
  cover = loadImage(songs[currentSongIndex].img);
}

function randomSong() {
  // Play a random song from the list
  currentSongIndex = floor(random(songs.length));
  song.stop();
  song = loadSound(songs[currentSongIndex].url, () => song.play());
  cover = loadImage(songs[currentSongIndex].img);
}

//Mouse interactions for buttons
function mousePressed(){
  if(mouseIsPressed == true && mouseX > 50 && mouseX < 250 && mouseY > 235 && mouseY < 295){
     playPause();
     }else if (mouseIsPressed == true && mouseX > 280 && mouseX < 480 && mouseY > 235 && mouseY < 295){
     nextSong();          
     }else if(mouseIsPressed == true && mouseX > 50 && mouseX < 250 && mouseY > 325 && mouseY < 375){
     previousSong();
     }else if (mouseIsPressed == true && mouseX > 280 && mouseX < 480 && mouseY > 325 && mouseY < 375){
     randomSong();
     }
}

//Keyboard interactions for buttons
function keyPressed(){
  if(keyCode === 49){
     playPause();
     }else if (keyCode === 50){
     nextSong();          
     }else if(keyCode === 51){
     previousSong();
     }else if (keyCode === 52){
     randomSong();
     }
}
