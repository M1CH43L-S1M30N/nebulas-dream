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
    this.names = ["Martin", "Carly", "Martin", "Mashu"]
    // this.pauseButton = document.getElementById("pause");
    this.sanitySlice = this.sanitySlice.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.continue = this.continue.bind(this);
    this.animate = this.animate.bind(this);
    this.populatePassengers = this.populatePassengers.bind(this);
    // this.handlePause = this.handlePause.bind(this);
    // this.handleBlackHole = this.handleBlackHole.bind(this);
    this.start();
  }

  handleEvent() {
    let cover = document.getElementById("cover");
    cover.style.visibility = "hidden";

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
        ans = `CATASTROPHE!  ${passenger.name} lost ${event[1]} of sanity!!`;
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
        this.time = (this.time + 10000) + (timeTwo - timeOne);
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
    let winnerDiv = document.getElementById("winner-div");
    let winner = document.getElementById("winner");
    let final;

    let endTime = Date.now();
    if (endTime - this.time >= 95000) {
      this.starfield.animating = false;
      let count = 0
      this.passengers.forEach(p => {
        if (p.status.sanity > 1) {
          count = count + 1;
        }
      })
      if(count === 4) {
        final = "The journey was long and unforgiving, but alas you and your family can begin your second chance at life on Genesis Two!!";
      } else {
        final = "Though all of you may not be mentally fit to contribute to society, at least some of you, with enough rehab will be able to begin your second chance at life on Genesis Two!!";
      }

      winner.innerHTML = `Congratulations! ${final}`;
      winnerDiv.style.visibility = "visible";
      // console.log("You made it to Genesis Two");
    } else {
      this.animate();
      this.sanitySlice();
      console.log("inside continue")
      setTimeout(this.handleEvent, 9000);
    }
  }


  start() {
    let cover = document.getElementById("cover");
    cover.style.visibility = "visible";
    this.animate();
    this.populatePassengers();
    this.sanitySlice();
    setTimeout(this.handleEvent, 9000);
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
    for (let i = 0; i < 4; i++) {
      let person = this.names[i];
      let pass = new Passenger(person);
      this.passengers.push(pass);
    }
  }
  // CODE SNIPPET

  updateSanity() {
    let alive = false;
    this.passengers.forEach(p => {
      if (p.status.sanity > 0) {
        alive = true;
      }
    })
    if (alive) {
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
    } else {
      let gameOverDiv = document.getElementById("game-over-div");
      let gameOver = document.getElementById("game-over");

      gameOver.innerHTML = "The journey to Genesis Two proved too much for you and your family. You are left to drift the void, until the end of time!... GAME OVER";
      gameOverDiv.style.visibility = "visible";
    }
  }
  // CODE SNIPPET

  sanitySlice() {
    let insane = document.getElementById("death");
    function disappear() {
      insane.style.visibility = "hidden";
    }
    this.passengers.forEach(person => {
      console.log(person)
      let res = person.hazard();
      if(!res) {
        insane.innerHTML = `${person.name} went insane!!!`;
        insane.style.visibility = "visible";
        // alert(`${person.name} went insane!!!`);
        // this.passengers = this.arrayRemove(this.passengers, person)
        setTimeout(disappear, 3000);
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