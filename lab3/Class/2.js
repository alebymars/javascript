class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Rabbit extends Animal {
  constructor(name) {
    super(name); // Error: this is not defined
    // this.name = name;
    // this.created = Date.now();
  }
}
let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);
