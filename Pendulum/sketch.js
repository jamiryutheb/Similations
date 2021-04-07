let r = 400;
let g = -10;
let dt = 0.3;
let mass = 10;
let x, y, h;

let angle, w, e,
  k1a, k1w, a_2K_1A, w_2K_1W, e_2K_1a,
  k2a, k2w, a_2K_2A, w_2K_2W, e_2K_2a,
  k3a, k3w, a_2K_3A, w_2K_3W, e_2K_3a,
  k4a, k4w, deltaA, deltaW;

function setup() {

  createCanvas(1920, 1080);

  angle = PI / 4;
  w = 0;

}

function draw() {
  stroke(0);
  strokeWeight(4);
  fill(0);
  background(220);
  translate(width / 2, 50);

  k1a = w;
  k1w = g / r * sin(angle);
  a_2K_1A = angle + k1a * dt / 2;
  w_2K_1W = w + k1w * dt / 2;
  e_2K_1a = g / r * sin(a_2K_1A);

  k2a = w + k1w * dt / 2;
  k2w = g / r * sin(a_2K_1A);
  a_2K_2A = angle + k2w * dt / 2;
  w_2K_2W = w + k2w * dt / 2;
  e_2K_2a = g / r * sin(a_2K_2A);

  k3a = k2a + k2w * dt / 2;
  k3w = g / r * sin(a_2K_2A);
  a_2K_3A = angle + k3a * dt / 2;
  w_2K_3W = w + k3w * dt / 2;
  e_2K_3a = g / r * sin(a_2K_3A);

  k4a = k3a + k3w * dt;
  k4w = g / r * sin(a_2K_3A);

  deltaA = ((k1a + 2 * k2a + 2 * k3a + k4a) / 6 * dt);
  deltaW = ((k1w + 2 * k2w + 2 * k3w + k4w) / 6 * dt);

  x = r * sin(angle);
  y = r * cos(angle);

  line(0, 0, x, y);
  ellipse(x, y, mass * 8, mass * 8);


  angle = angle + deltaA;
  w = w + deltaW;

}
