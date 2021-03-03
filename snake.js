function Snake() {
  this.x = 20;
  this.y = 30;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.total = 0;
  this.body = [];

  this.show = function() {
  ctx.beginPath();
  ctx.rect(this.x, this.y, scale, scale);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();
  }

  this.startOver = function() {
    for (i = 0; i < snake.body.length; i++) {
      if (this.x == this.body[i].x && this.y == this.body[i].y) {
        this.body = [];
        this.total = 0;
        }
    }
  }

  this.grow = function() {
  for (let i = 0; i<this.body.length-1; i++) {
    ctx.beginPath();
    ctx.rect(this.body[i].x, this.body[i].y, scale, scale);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
      }
    }

  this.update = function() {

    for (i = 0; i < this.body.length-1; i++) {
      this.body[i] = this.body[i+1];
      }
    this.body[this.total] = {x: this.x, y: this.y};

    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;

    if (this.x>=canvas.width) {
      this.x = 0;
    } if (this.x<0) {
      this.x = 300;
    } if (this.y>=canvas.height) {
      this.y = 0;
    } if (this.y<0) {
    this.y = 300;
    }
  }
}
