let limeImg, periImg, grapeImg, mx, my, button, par;

function preload() {
  periImg = loadImage("/images/asset/Periwinkle.png");
  limeImg = loadImage("/images/asset/Lime Green.png");
  grapeImg = loadImage("/images/asset/GrapeTopRight.png");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'block');

  textSize(width / 40);
  textAlign(CENTER,CENTER);
  textWrap(WORD);
  textFont('MuseoModerno')

  mx = width / 4;
  my = height / 4;
  
  button = createButton('on LinkedIn');
  button.position( windowWidth / 2.36 , height / 2.25);
  button.style('font-size', '' + width / 40 + 'px');
  button.style('background-color', '#180b3d');
  button.style('color', '#a3bcff');

  button.mousePressed(buttonClicked);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    textSize(width / 30);
    button.style('font-size', '' + width / 40 + 'px');
    button.position( windowWidth / 2.36, height / 2.25);
}

function mouseMoved() {
  mx = mouseX - 200;
  my = mouseY;
}
function buttonClicked() {
    window.open('https://www.linkedin.com/in/mikayla-buford-947122163/');
}

function draw() {
  background("#180B3D");
 
  var ctrX = windowWidth / 4;

  translate(ctrX, 0);

  // GRAPE - Top Left
  push();
  // translate to where you want the center of the ellipse to be
  translate(20, 50);
  // rotate using the frameCount (increases by one on each frame)
  rotate(frameCount * 0.01);
  // place the image at the origin
  imageMode(CENTER);
  image(grapeImg, 0, 0, 400, 600);
  pop();

  // GRAPE - Top Right
  push();
  translate(700, 100);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(grapeImg, 0, 0, 500, 500);
  pop();

  // GRAPE - Center
  push();
  translate(460, 250);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(grapeImg, 0, 0, 600, 350);
  pop();

  // GRAPE - Bottom Right
  push();
  translate(700, 500);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(grapeImg, 0, 0, 600, 900);
  pop();

  // GRAPE - Bottom Left
  push();
  translate(70, 510);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(grapeImg, 0, 0, 800, 600);
  pop();

  // PERIWINKLE - Top Center
  push();

  translate(450, 80);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(periImg, 0, 0, 500, 500);

  pop();
  
  // PERIWINKLE - Left Center
  push();

  translate(40, 300);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(periImg, 0, 0, 400, 500);

  pop();

  // PERIWINKLE - Bottom Right
  push();

  translate(650, 400);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(periImg, 0, 0, 200, 200);

  pop();
  
  // LIME - Top Left
  push();
  translate(200, 100);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(limeImg, 0, 0, 100, 100);
  pop();

  // LIME - Center Left
  push();
  translate(800, 300);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(limeImg, 0, 0, 450, 500);
  pop();

  // LIME - Center
  push();
  translate(300, 300);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(limeImg, 0, 0, 300, 340);
  pop();

  // LIME - Bottom Right
  push();
  translate(350, 600);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(limeImg, 0, 0, 600, 600);
  pop();

  // LIME - Bottom Left
  push();
  translate(200, 100);
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  image(limeImg, 0, 0, 200, 200);
  pop();

  fill('#180b3d');
  text("Hello World!", mx , my); 

  fill('#a3bcff'); 
  text("Hello World!", mx + 1 , my - 1);

  fill('#f9f5fa');
  text("I'm redesigning my website", width / 4, height / 3.17);
  text("You can still check out my work", width / 4 , height / 2.45);
}

