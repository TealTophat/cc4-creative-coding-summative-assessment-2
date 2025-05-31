let CatchX = 200;
let CatchY = 400;
let CatchHP = 100;
let CatchBuff = 0;
let DropX = 300;
let DropY = -50;
let DropSpeed = 4;
let score = 0;
let SpeedMod = 0;
let HighScore = 0;
var GameState = 0;

var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;

function preload(){
  sound1 = loadSound('audio/ERROR.mp3');
  sound2 = loadSound('audio/STARTUP.mp3');
  sound3 = loadSound('audio/SHUTDOWN.mp3');
  sound4 = loadSound('audio/CONNECT.mp3');
  //Unused sounds
  //sound5 = loadSound('audio/EXCALAMATION.mp3');
  //sound6 = loadSound('audio/DING.mp3');
}

function setup() {
  createCanvas(600, 500);
  rectMode(CENTER);
  }

function draw() {
  
  //Game starts at GameState == 0 otherwise known as the title screen
  if (GameState == 0){
      GameStart();
      }
  if (GameState == 1){
    //Change state to "game" state
      GamePlay();
      }
  if (GameState == 2){
    //Change state to "lose" state
      GameOver();
      }
}
  
function GameStart(){
  background(0);
  textSize(100);
  fill(0,255,random(0,70));
  text("_Catch",140,200);
  rect(width/2,300,150,60);
  fill(0);
  textSize(30);
  text("Log On",250,310)
    
  //Log On button click detection
    if (mouseX <= 350 && mouseX >= 150 && mouseY >= 260 && mouseY <= 340 && mouseIsPressed == true){
        GameState = 1;
        }
      }
  
function GamePlay(){
  background(5,1,random(40,47));
  
  //Create Drop
  textAlign(LEFT);
  textSize(10);
  fill(255,0,0);
  ellipse(DropX,DropY,40);
  //Create Catch
  fill(255);
  rect(CatchX, CatchY, 125+CatchBuff, 20);
  text("HP: "+CatchHP, CatchX-15, CatchY+25);
  //Score + Other Info
  fill(255);
  text("Score: "+score,20,30);
  text("High Score: "+HighScore, 20, 50)
  //Erase [//] below to see numbers
  //text("Current Speed: "+DropSpeed,20,70);
  //text("SpeedMod: "+SpeedMod, 20, 90)
  

  //Movement
  CatchX = mouseX
  
  //Move Drop
  DropY += DropSpeed;
  //Reset Drop Offscreen
  if (DropY>700){
    DropY = -50;
    DropX = random(width);
    //Reduce CatchBuff
    if (CatchBuff > 30){
        CatchBuff -= 30;
        }
    //Reduce DropSpeed
    if (DropSpeed > 8){
      DropSpeed -= DropSpeed/2;
    }
    //Set SpeedMod to 0 to slow down acceleration
    SpeedMod = 0;
    if (CatchHP <= 1){
      if (score >= HighScore){
          HighScore = score;
          }
    //Set the GameState variable to 2 (lose)
      GameState = 2;
      sound3.play();
    }else if (CatchHP == 10){
      //Last life mechanic: Subtract 9 from CatchHP instead of 10
      CatchHP -= 9;
      sound1.play();
    }else{
      //Subtract 10 from CatchHP if more than 10
      CatchHP -= 10;
      sound1.play();
    }
  }
  //Reset Drop when Caught
  if(mouseX-DropX<70+CatchBuff && DropX-mouseX<70+CatchBuff && CatchY-DropY<20 && DropY-CatchY<20){
    DropY = -50;
    DropX = random(width);
    score += 1+round(SpeedMod);
    if (DropSpeed < 25){
      //Increase SpeedMod to exponentially increase DropSpeed
      SpeedMod += score/100;
      DropSpeed += SpeedMod;
    }
    //Increase CatchBuff unless equal to 250
    if(CatchBuff >= 250){
      CatchBuff = 250;
    }else{
      CatchBuff += 5
      sound4.play();
    }
  }
  }
    
  //Game Over!
function GameOver(){ 
    //Retry button click detection
    if (mouseX <= 350 && mouseX >= 250 && mouseY >= 280 && mouseY <= 350 && mouseIsPressed == true){
      //Reset game variables
        GameState = 1;
        score = 0;
        SpeedMod = 0;
        DropSpeed = 4;
        CatchHP = 100;
        CatchBuff = 0;
        }
    //Create end screen
    fill(0,0,random(250,255));
    rect(0,0,30000);
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text("GAME OVER",width/2,height/2);
    textSize(20);
    text("Your Score: "+score,width/2,280);
    rect(width/2,330,100,50);
    textSize(25);
    fill(0);
    text("Retry?",width/2,340);
    //High Score Check
    if(score >= HighScore){
      fill(0,255,0);
      HighScore = score;
      text("New High Score!", width/2, 390);
    }
    //Rank Remarks
    if(score == 0){
      fill(random(255),random(255),random(255));
      textSize(50);
      text("SKILL ISSUE LMAOOOO", width/2, 150);
    }else if(score <= 10){
      fill(random(255),random(255),random(255));
      textSize(50);
      text("HOW EVEN?", width/2, 100);
    }else if(score <= 49){
      fill(random(255),random(255),random(255));
      textSize(50);
      text("Great Job... NOT!!!", width/2, 150);
    }else if(score >= 50 && score < 100){
      fill(random(255),random(255),random(255));
      textSize(50);
      text("Task failed successfully.", width/2, 150);
    }else if(score >= 100 && score < 200){
      fill(random(255),random(255),random(255));
      textSize(50);
      text("GG.", width/2, 100);
    }else if(score >= 200 && score < 1000){
      fill(random(255),random(255),random(255));
      fill(random(255),random(255),random(255));
      textSize(40);
      text("DDOS MASTER SUPREME", width/2, 150);
    }else if(score >= 1000){
      fill(random(255),random(255),random(255));
      textSize(40);
      text("YOU'RE HACKINGGGGGG", width/2, 150);
    }
      }