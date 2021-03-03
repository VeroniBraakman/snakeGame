var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height/scale;
const colums = canvas.width/scale;

var snake;
var fruit;

var rightPressed;
var leftPressed;
var upPressed;
var downPressed;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

function keyPressedConditions() {
  if(rightPressed) {
  snake.xSpeed = scale;
  snake.ySpeed = 0;
  }
  else if(leftPressed) {
  snake.xSpeed = scale * -1;
  snake.ySpeed = 0;
  }
  else if(upPressed) {
  snake.ySpeed = scale * -1;
  snake.xSpeed = 0;
  }
  else if (downPressed) {
  snake.ySpeed = scale;
  snake.xSpeed = 0;
  }
}

  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.show();
    snake.show();
    snake.update();
    snake.grow();
    if (snake.x == fruit.x && snake.y == fruit.y) {
      snake.total++;
      fruit.pickLocation();
    }
    snake.startOver();
    keyPressedConditions();
}
x = setInterval(draw, 100);
