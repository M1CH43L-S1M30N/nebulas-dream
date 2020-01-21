import Nebula from "./Nebula";
import Ship from "./Ship";
import Starfield from "./Starfield";

const sendoffs = [
  "Godspeed on your journey!!!",
  "Safe passage to Genesis Two!!",
  "Do not go gently into that good night!",
  "Nobody can hear you scream in space!!",
  "You're not in Kansas anymore!!",
  "Your colony awaits you at Genesis Two!"
]

const canvas = document.getElementById("canvas");
const key = document.getElementById("any-key-id");
const intro = document.getElementById("intro");
const instruct = document.getElementById("instructions-div");
const sendoff = document.getElementById("Godspeed");

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
  sendoff.innerHTML = sendoffs[Math.floor(Math.random() * 6)];
  new Nebula(canvas);
})


// new Nebula(canvas);