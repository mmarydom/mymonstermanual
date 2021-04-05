let img;
var x = 0;

function preload() {
  img = loadImage('images/star 1.png');
}
function setup() {

}

function draw() {
  var canvas = createCanvas(720, 400);
  canvas.parent('sketch-holder');
	x+= 0.05;
  translate (width/2, height/2);
  rotate(x);
  image(img, 0, 0);
}
