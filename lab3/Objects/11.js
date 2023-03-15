// Создайте функцию-конструктор Accumulator(startingValue). Объект, который она
// создаёт, должен уметь следующее:
//  Хранить «текущее значение» в свойстве value. Начальное значение
// устанавливается в аргументе конструктора startingValue.
//  Метод read(a) должен принимать число и прибавлять его к value.
// Другими словами, свойство value представляет собой сумму всех введённых
// пользователем значений, с учётом начального значения startingValue.
// Пример работы с объектом:
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(10); // прибавляет 10 к текущему значению
// accumulator.read(5); // прибавляет 5 к текущему значению
// console.log(accumulator.value); // выведет 16

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function (a) {
    this.value += a;
  };
}

const accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(10); // прибавляет 10 к текущему значению
accumulator.read(5); // прибавляет 5 к текущему значению

console.log(accumulator.value); // выведет 16
