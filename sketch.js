var hr, mn, sc;


function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  angleMode(DEGREES);
  hr = hour();
  mn = minute();
  sc = second();

  noFill();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  translate(windowWidth/2,windowHeight/2)
  rotate(-90);
  strokeWeight(20);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  line(0,0,100,0);
  arc(0,0,300,300,0,scAngle);
  pop();

  push();
  rotate(mnAngle); 
  stroke(0,255,0);
  line(0,0,70,0);
  arc(0,0,300,300,0,mnAngle);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255); 
  line(0,0,50,0);
  arc(0,0,300,300,0,hrAngle);
  pop();


  drawSprites();
}
