// save this file as sketch.js
// Sketch One


var s = function( p ) { // p could be any variable name
  var x = 0;
  p.function preload() {
    p.img = loadImage('images/graphic/star1.png');
  }
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(0);
    x+= 0.05;
    p.translate (100, 100);
    p.rotate(x);
    p.image(img, 0, 0, 50, 50);

  };
};
var myp5 = new p5(s, 'c1');

// Sketch Two
var t = function( p ) {
  var x = 100.0;
  var y = 100;
  var speed = 2.5;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(100);
    p.fill(1);
    x += speed;
    if(x > p.width){
      x = 0;
    }
    p.ellipse(x,y,50,50);

  };
};
var myp5 = new p5(t, 'c2');
