var x = 0;

function preload() {
  img = loadImage('images/graphic/star1.png');
}

function setup() {
  var canvas = createCanvas(1000, 1000);
  canvas.parent('sketch-holder');
}

function draw() {
	x+= 0.05;
  translate (100, 100);
  rotate(x);
    image(img, 0, 0, 50, 50);
}
