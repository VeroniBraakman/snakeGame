function Fruit() {

  this.pickLocation = function() {
  this.x = (Math.floor(Math.random() * colums -1)+1)*scale;
  this.y = (Math.floor(Math.random() * rows -1)+1) * scale;
  }

  this.show = function () {
  ctx.beginPath();
  ctx.rect(this.x, this.y, 10, 10);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
  }
}
