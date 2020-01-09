import Ship from "./Ship";
import Starfield from "./Starfield";
import Passenger from "./Character";

export default class Nebula {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dim = { width: canvas.width, height: canvas.height };
    this.ship = new Ship();
    this.starfield = new Starfield();
    this.passengers = [];
    this.scenarios;
    this.paused = false;
    this.pauseButton = document.getElementById("pause");
    this.pauseButton.addEventListener('click', (e) => {
      this.handlePause();
    })
    this.sanitySlice = this.sanitySlice.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.start();
  }

  handleAsteroid() {
    
  }




  start() {
    this.animate();
    this.populatePassengers();
    // setInterval(this.sanitySlice, 1000);
  }

  animate() {
    if(this.paused) return;
    this.ship.animate(this.ctx);
    this.starfield.animate(this.ctx);
  }

  populatePassengers() {
    for (let i = 1; i < 5; i++) {
      let person = prompt(`Enter Passenger #${i}'s name`);
      this.passengers.push(new Passenger(person));
    }
  }

  sanitySlice() {
    // console.log(this)
    this.passengers.forEach(person => {
      console.log(person)
      let res = person.hazard();
      if(!res) {
        alert(`${person.name} went insane!!!`);
        this.passengers = this.arrayRemove(this.passengers, person)
        console.log(this.passengers)
      }
    })
  }

  arrayRemove(arr, value) {

    return arr.filter(function (ele) {
      return ele != value;
    });

  }

}