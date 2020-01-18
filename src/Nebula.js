import Ship from "./Ship";
import Starfield from "./Starfield";
import Passenger from "./Character";
import Event from "./Event";

export default class Nebula {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dim = { width: canvas.width, height: canvas.height };
    this.ship = new Ship();
    this.starfield = new Starfield(this.ctx);
    this.event = new Event();
    this.passengers = [];
    this.scenarios;
    this.time = Date.now();
    this.paused = false;
    // this.pauseButton = document.getElementById("pause");
    this.sanitySlice = this.sanitySlice.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.continue = this.continue.bind(this);
    this.animate = this.animate.bind(this);
    // this.handlePause = this.handlePause.bind(this);
    // this.handleBlackHole = this.handleBlackHole.bind(this);
    this.start();
  }

  handleEvent() {

    this.starfield.animating = false;
    let timeOne = Date.now();
    let alert = document.getElementById("alert-id");
    let alertDiv = document.getElementById("alert-div-id");
    let avoid = document.getElementById("yes");
    let cont = document.getElementById("no");
    let yesno = document.getElementById("yes-no");
    let encounterDiv = document.getElementById("encounter-div");
    let encounter = document.getElementById("encounter");

    

    function disappear() {
      alertDiv.style.visibility = "hidden";
      yesno.style.visibility = "hidden";
      encounterDiv.style.visibility = "hidden";
    }
    
    let ans;
    let event = this.event.trigger();
    
    if (this.passengers) {
      alert.innerHTML = event[0];
      alertDiv.style.visibility = "visible";
      yesno.style.visibility = "visible";
      
      // ans = prompt(`${event[0]} type [avoid] or [continue]`);
      console.log("setting click handler");

      cont.onclick = () => {
        let timeTwo = Date.now();
        this.time = this.time + (timeTwo - timeOne);
        // e.preventDefault();
        let passenger = this.passengers[Math.floor(Math.random() * this.passengers.length)];
        passenger.hazard(event[1]);
        ans = `${passenger.name} lost ${event[1]} of sanity!!`;
        encounter.innerHTML = ans;
        encounterDiv.style.visibility = "visible";
        setTimeout(() => {
          console.log((timeTwo - timeOne) / 1000);
          disappear();
          this.updateSanity();
          this.continue();
        }, 3000);
        // avoid.removeEventListener("click", cbAvoid);
      }

      avoid.onclick = () => {
        let timeTwo = Date.now();
        this.time = (this.time + 15000) + (timeTwo - timeOne);
        // e.preventDefault();
        ans = "Crisis Avoided...rerouting";
        encounter.innerHTML = ans;
        encounterDiv.style.visibility = "visible";
        setTimeout(() => {
          console.log((timeTwo - timeOne) / 1000);
          disappear();
          this.updateSanity();
          this.continue();
        }, 3000);
        // cont.removeEventListener("click", cbCont);
      }
      // cont.removeEventListener("click", cbCont);
      // avoid.removeEventListener("click", cbAvoid);
      
      // avoid.addEventListener("click", cbAvoid, { once: true });
      // cont.addEventListener("click", cbCont, { once: true })
    }
  }

  continue() {
    let endTime = Date.now();
    if (endTime - this.time >= 20000) {
      console.log("You made it to Genesis Two");
    } else {
      this.animate();
      this.sanitySlice();
      console.log("inside continue")
      setTimeout(this.handleEvent, 3000);
    }
  }


  start() {
    this.animate();
    this.populatePassengers();
    this.sanitySlice();
    setTimeout(this.handleEvent, 3000);
    // setTimeout(this.handleBlackHole, 5000);
    // setTimeout(this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), 5000);
  }

  animate() {
    this.ship.animate(this.ctx);
    this.starfield.animate(this.ctx);
    // console.log(this.starfield.frame);
    // console.log("wtf")
  }

  populatePassengers() {
    for (let i = 1; i < 5; i++) {
      let person = `Mike${i}`;
      let pass = new Passenger(person);
      this.passengers.push(pass);
    }
  }
  // CODE SNIPPET

  updateSanity() {
    if (this.passengers) {
      for (let i = 0; i < this.passengers.length; i++) {
        let character = document.getElementById(`p${i + 1}`);
        let pass = this.passengers[i];
        if (pass.status.sanity < 55 && pass.status.sanity > 25) {
          character.style.borderColor = "orange";
        } else if (pass.status.sanity <= 25) {
          character.style.borderColor = "red";
        }
        character.innerHTML = `${pass.name}'s sanity: ${pass.status.sanity}`;
      }
    }
  }
  // CODE SNIPPET

  sanitySlice() {
    this.passengers.forEach(person => {
      console.log(person)
      let res = person.hazard();
      if(!res) {
        alert(`${person.name} went insane!!!`);
        this.passengers = this.arrayRemove(this.passengers, person)
        // console.log(this.passengers)
      }
    })
  }

  arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }

}