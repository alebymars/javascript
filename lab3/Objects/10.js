// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя
// методами:
//  read(a, b) принимает два значения и сохраняет их в свойствах объекта.
//  sum() возвращает сумму этих свойств.
//  mul() возвращает произведение этих свойств

function Calculator() {
  this.read = function (a, b) {
    this.a = a;
    this.b = b;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

const calculator = new Calculator();

calculator.read(3, 5);
console.log(calculator.sum());
console.log(calculator.mul());

