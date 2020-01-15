export default class Event {
  constructor() {
    this.events = ["Alert Black Hole Detected",
     "Alert Unknown Singularity Detected",
     "Alert Asteroid Belt Detected",
     "Alert Acidic Space Rain Detected",
     "Alert Unidentified Flying Object Detected",
      "Alert Unexpected Gravitational Pull Detected",
       "Alert Impending Supernova Detected"]
  }

  trigger() {
    var rand = this.events[Math.floor(Math.random() * this.events.length)];
    return [rand, Math.floor(Math.random() * 10 + 1)];
  }


}