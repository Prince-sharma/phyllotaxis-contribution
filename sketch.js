// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KWoJgHFYWxY

var n = 0;
var c = 4;
var fact = -1;
var limit = 1600;
var speed = 0.1;
var angle = 137.5;
var n_increment = 20;
var start_increment = 2;
var size_fact_input = 0.75;
var hu_ = 0.3;
var size_ = 0.5;
var alpha_ = 0.5;

var points = [];

var start = 0;

var c_slider;
var limit_slider;
var speed_slider;
var angle_slider;
var n_increment_slider;
var start_increment_slider;
var size_fact_input_slider;
var hu__slider;
var size__slider;
var alpha__slider;


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  angleMode(DEGREES);
  colorMode(HSB);

  c_slider = document.getElementById('c_slider');
  angle_slider = document.getElementById('angle_slider');
  limit_slider = document.getElementById('limit_slider');
  speed_slider = document.getElementById('speed_slider');
  n_increment_slider = document.getElementById('n_increment_slider');
  start_increment_slider = document.getElementById('start_increment_slider');
  size_fact_input_slider = document.getElementById('size_fact_input_slider');
  hu__slider = document.getElementById('hu__slider');
  size__slider = document.getElementById('size__slider');
  alpha__slider = document.getElementById('alpha__slider');
}

function draw() {
  background(200);
  translate(width / 2, height / 2);
  rotate(fact * n * float(speed_slider.value));
  for (var i = 0; i < n; i++) {
    var a = i * float(angle_slider.value);
    var r = float(c_slider.value) * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);

    var hu = sin(start + i * float(hu__slider.value));
    var alpha = cos(start + i * float(alpha__slider.value));
    var size_x = sin(start + i * float(size__slider.value));
    var size_y = cos(start + i * float(size__slider.value));

    hu = map(hu, -1, 1, 300, 360);
    alpha = map(alpha, -1, 1, 50, 255);
    size_x = map(size_x, -1, 1, 6, 8);
    size_y = map(size_y, -1, 1, 6, 8);

    fill(hu, alpha, 255);
    noStroke();
    var size_fact = n/limit; // (sqrt(x*x + y*y)/sqrt(((width/10) * (width/10)) + ((height/10) * (height/10))));
    size_fact = map(size_fact, 0, 1, 1, float(size_fact_input_slider.value));
    ellipse(x, y, size_x * size_fact, size_y * size_fact);
  }

  if (n == limit || n == 0) {
    changeDirection();
  }

  n += fact * n_increment;//float(n_increment_slider.value);
  start += float(start_increment_slider.value);
}

function changeDirection() {
  fact *= -1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
