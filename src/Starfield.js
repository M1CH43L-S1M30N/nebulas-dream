export default class Starfield {
  constructor() {
    this.img = new Image();
    this.img.src = "../dist/assets/stars.png";
  }

  animate(ctx) {
    var width = 650;
    var height = 400;

    var imgWidth = 0;

    var scrollSpeed = 5;
    let that = this;

    function loop() {
      ctx.drawImage(that.img, imgWidth, 0);

      ctx.drawImage(that.img, imgWidth - width, 0);

      imgWidth += scrollSpeed;

      if (imgWidth == width) imgWidth = 0;

      requestAnimationFrame(loop);
    }
    loop();
  }
}




// var canvas = document.getElementById("canvas");
// console.log(canvas);

// var ctx = canvas.getContext("2d");

// canvas.width = 650;
// canvas.height = 400;

// var img = new Image();

// img.src = "../dist/assets/stars.png";

// window.onload = function() {
//   var imgWidth = 0;

//   var scrollSpeed = 5;

//   function loop() {
//     var ship = new Ship();
//     ship.drawImage(ctx);
//     ctx.drawImage(img, imgWidth, 0);

//     ctx.drawImage(img, imgWidth - canvas.width, 0);

//     imgWidth += scrollSpeed;

//     if (imgWidth == canvas.width) imgWidth = 0;

//     window.requestAnimationFrame(loop);
//   }

//   loop();
//   console.log("wow");
// }