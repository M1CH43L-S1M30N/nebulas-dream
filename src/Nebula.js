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
    this.date = Date.now();
    this.paused = false;
    // this.pauseButton = document.getElementById("pause");
    this.sanitySlice = this.sanitySlice.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.continue = this.continue.bind(this);
    // this.handlePause = this.handlePause.bind(this);
    // this.handleBlackHole = this.handleBlackHole.bind(this);
    this.start();
  }

  handleEvent() {
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
    
    if (this.passengers.length) {
      alert.innerHTML = event[0];
      alertDiv.style.visibility = "visible";
      yesno.style.visibility = "visible";
      
      // ans = prompt(`${event[0]} type [avoid] or [continue]`);
      avoid.addEventListener("click", () => {
        let passenger = this.passengers[Math.floor(Math.random() * this.passengers.length)];
        passenger.hazard(event[1]);
        ans = `${passenger.name} lost ${event[1]} of sanity!!`;
        encounter.innerHTML = ans;
        encounterDiv.style.visibility = "visible";
        setTimeout(() => {
          disappear();
          this.updateSanity();
        }, 4000);
        setTimeout(this.continue, 4000);
      })
      cont.addEventListener("click", () => {
        ans = "Crisis Avoided...rerouting";
        encounter.innerHTML = ans;
        encounterDiv.style.visibility = "visible";
        setTimeout(() => {
          disappear();
          this.updateSanity();
        }, 4000);
        setTimeout(this.continue, 4000);
      })
    }


    // if (ans === "avoid") {
    //   let passenger = this.passengers[Math.floor(Math.random() * this.passengers.length)];
    //   console.log(`${passenger.name} lost ${event[1]} of sanity!!`)
    //   passenger.hazard(event[1]);
    // }
    
  }

  continue() {
    this.animate();
    this.sanitySlice();
    setTimeout(this.handleEvent, 5000);
  }


  start() {
    this.animate();
    this.populatePassengers();
    this.sanitySlice();
    setTimeout(this.handleEvent, 5000);
    // setTimeout(this.handleBlackHole, 5000);
    // setTimeout(this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), 5000);
  }

  animate() {
    this.ship.animate(this.ctx);
    // this.starfield.animate();
    // console.log(this.starfield.frame);
    console.log("wtf")
  }

  populatePassengers() {
    for (let i = 1; i < 5; i++) {
      let person = prompt(`Enter Passenger #${i}'s name`);
      let pass = new Passenger(person);
      this.passengers.push(pass);
    }
  }

  updateSanity() {
    if (this.passengers) {
      for (let i = 0; i < this.passengers.length; i++) {
        let chicken = document.getElementById(`p${i + 1}`);
        let pass = this.passengers[i];
        chicken.innerHTML = `${pass.name}'s sanity: ${pass.status.sanity}`;
      }
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