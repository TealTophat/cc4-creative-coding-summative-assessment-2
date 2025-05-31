var numbers = [2.5,3,4,1,2,7,5,10,8,2,4,2];  

function setup() {
  createCanvas(600, 400);
  background(220);
  for (var i = 0; i<numbers.length; i++){
    var n = numbers[i];
    var x = map(i,0,numbers.length,0,width);
    var w = width/numbers.length;
    var h = map(n,0,numbers.length,0,height);
    var y = height - h;
    var c = map(n,0,max(numbers),0,360);
    fill(c,100,100);
    rect(x,y,w,h);
  }
}