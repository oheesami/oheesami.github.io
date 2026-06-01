let snake;
let rez = 20;
let food;
let w;
let h;
let score = 0;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  placeFood();
}

function placeFood() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW)       snake.setDir(-1, 0);
  else if (keyCode === RIGHT_ARROW) snake.setDir(1, 0);
  else if (keyCode === DOWN_ARROW)  snake.setDir(0, 1);
  else if (keyCode === UP_ARROW)    snake.setDir(0, -1);
  else if (key == ' ')              snake.grow();
}

function draw() {
  background(220);

  if (snake.munch(food)) {
    score++;
    placeFood();
  }

  snake.update();
  snake.show();

  if (snake.isDead()) {
  background(200, 50, 50);

  // face
  fill(255, 220, 0);
  noStroke();
  ellipse(width/2, height/2, 120, 120);

  // eyes
  fill(0);
  ellipse(width/2 - 20, height/2 - 15, 15, 15);
  ellipse(width/2 + 20, height/2 - 15, 15, 15);

  // frown
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(width/2, height/2 + 30, 50, 40, PI, 0);

  noLoop();
}

  noStroke();
  fill(50, 180, 100);
  rect(food.x * rez, food.y * rez, rez, rez);
}
