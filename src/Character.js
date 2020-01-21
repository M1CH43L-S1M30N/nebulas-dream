export default class Character {
  constructor(name) {
    this.name = name;
    this.status = { health: 100, sanity: 100 };
  }

  hazard(n) {
    const rand = n || Math.floor(Math.random() * 10 + 5);
    
    this.status.sanity -= rand;
    
    if (this.status.sanity < 1) {
      return false
    }
    return true;
  }
}