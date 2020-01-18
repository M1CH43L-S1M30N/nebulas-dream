import Nebula from "./Nebula";
import Ship from "./Ship";
import Starfield from "./Starfield";

const canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

const ship = new Ship();
const starfield = new Starfield(ctx);

ship.animate(ctx);
starfield.animate(ctx);

document.addEventListener("keypress", () => {
  new Nebula(canvas);
})


// new Nebula(canvas);