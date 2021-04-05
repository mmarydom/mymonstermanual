let system;

let img;
var x = 0;

function preload() {
  img = loadImage('images/graphic/star1.png');
}

function setup() {
system = new ParticleSystem(createVector(width / 2, 5));
}

function draw() {
  var canvas = createCanvas(720, 400);
  canvas.parent('sketch-holder');
  system.addParticle();
  system.run();
}

// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(0, 0.04);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  strokeWeight(0);
  fill(255, 0, 0, this.lifespan);
  ellipse(this.position.x, this.position.y, 10, 10);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
