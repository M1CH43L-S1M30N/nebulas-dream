export default class Character {
  constructor(name) {
    this.name = name;
    this.status = { health: 100, sanity: 100 };
  }

  hazard() {
    const rand = Math.floor(Math.random(5) * 10);
    this.status.sanity -= rand;
    if (this.status.sanity < 1) {
      return false
    }
    return true;
  }
}