var hr, mn, sc;
hr = hour();
mn = minute();
sc = second();

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255,255,255);
  angleMode(DEGREES);


  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,24,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle); 
  stroke(0,255,0);
  line(0,0,70,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255); 
  line(0,0,50,0);
  pop();


  drawSprites();
}