const CONSTANTS = {
  HEIGHT: 100,
  WIDTH: 150
};

export default class Ship {
  contructor() {
    this.ship;
  }

  animate(ctx) {
    this.drawShip(ctx);
  }

  drawShip(ctx) {
    this.ship = new Image();
    this.ship.src = "../dist/assets/lastSprite.png";
    let that = this;
    this.ship.onload = function keepDrawing() {
      ctx.drawImage(that.ship, 400, 160);
      requestAnimationFrame(keepDrawing);
    }
  }
}