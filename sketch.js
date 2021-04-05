let img;
var x = 0;

function preload() {
  img = loadImage('images/graphic/star1.png');
}

function draw() {
  var canvas = createCanvas(1000, 1000);
  canvas.parent('sketch-holder');
	x+= 0.05;
  translate (100, 100);
  rotate(x);
    image(img, 0, 0, 50, 50);
}
