// Создайте объект calculator (калькулятор) с тремя методами:
//  read(a, b) (читать) принимает два значения и сохраняет их как свойства объекта.
//  sum() (суммировать) возвращает сумму сохранённых значений.
//  mul() (умножить) перемножает сохранённые значения и возвращает результат

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

//Проверка:

calculator.read(3, 5);
console.log(calculator.sum());
console.log(calculator.mul());