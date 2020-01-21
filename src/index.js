import Nebula from "./Nebula";
import Ship from "./Ship";
import Starfield from "./Starfield";

const canvas = document.getElementById("canvas");
const key = document.getElementById("any-key-id");
const intro = document.getElementById("intro");
const instruct = document.getElementById("instructions-div");

let ctx = canvas.getContext("2d");

const ship = new Ship();
const starfield = new Starfield(ctx);

ship.animate(ctx);
starfield.animate(ctx);

document.addEventListener("keypress", () => {
  starfield.animating = false;
  key.style.visibility = "hidden";
  intro.style.visibility = "hidden";
  instruct.style.visibility = "hidden";
  new Nebula(canvas);
})


// new Nebula(canvas);