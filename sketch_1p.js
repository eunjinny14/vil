var img;
var bac;
var cirX=30;
var cirY=30;
var x;
var y;

function preload(){
  img = loadImage('village.jpg');
  bac = loadImage('village.jpg');
}

function setup() {
  createCanvas(840,540);
  noStroke();
  background(255);
  bac = loadImage('village.jpg');
  bac.loadPixels();
  keyPressed();
}

function draw() {
  var x = int(random(0,420));
  var y = int(random(0,540));
  
  var loc = bac.get(x,y);
  fill(loc,128);
  ellipse(x,y, cirX, cirY);
  
    image(img,420,0);
  
}

function keyPressed(){

    if(keyCode == UP_ARROW ){cirX+=1;cirY+=1;}
    else if(keyCode == DOWN_ARROW ){cirX-=1;cirY-=1;}
  
}
