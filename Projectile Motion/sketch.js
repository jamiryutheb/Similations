let k = 0.24;
let mass = 2;
let gravity, s, velocity, v_2, deltaS, deltaV, acceleration, a_2;
let dt = 0.1;
let counter = 1;

function setup() {
  createCanvas(800, 600);

  gravity = createVector(0, 10);
  s = createVector(0, 0);
  velocity = createVector(10, 10);
  acceleration = createVector((mass * gravity.x - k * velocity.x) / mass, (mass * gravity.y - k * velocity.y) / mass);

  v_2 = createVector(velocity.x + (acceleration * dt / 2), velocity.y + (acceleration * dt / 2));

  deltaS = createVector(dt * v_2.x, dt * v_2.y);
  deltaV = createVector(gravity.x * dt, gravity.y * dt);
  a_2 = createVector(mass * gravity.x - k * velocity.x * dt / 2, mass * gravity.y - k * velocity.y * dt / 2);

}

function draw() {
  fill(0);
  background(220);
  circle(s.x, s.y, mass * 16);
  update();

  if (s.y > height) {
    velocity.y *= -0.7;
    s.y = height - mass * 8;
  }

}

function mousePressed() {
  setTimeout(update(), 100);
}

function update() {

  s.x = s.x + deltaS.x;
  s.y = s.y + deltaS.y;
  velocity.x = velocity.x + deltaV.x;
  velocity.y = velocity.y + deltaV.y;
  acceleration.x = (mass * gravity.x - k * velocity.x) / mass;
  acceleration.y = (mass * gravity.y - k * velocity.y) / mass;
  v_2.x = velocity.x + (acceleration.x * (dt / 2));
  v_2.y = velocity.y + (acceleration.y * (dt / 2));
  deltaS.x = v_2.x * dt;
  deltaS.y = v_2.y * dt;
  a_2.x = mass * gravity.x - k * v_2.x * dt / 2;
  a_2.y = mass * gravity.y - k * v_2.y * dt / 2;
  deltaV.x = a_2.x * dt;
  deltaV.y = a_2.y * dt;

}
