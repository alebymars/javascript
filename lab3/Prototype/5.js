function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// Rabbit.prototype = {}; // true
// Если перед `console.log` добавить строку `Rabbit.prototype = {};`, то при вызове `console.log(rabbit.eats);` будет выведено `true`. Это происходит потому, что мы перезаписали прототип конструктора `Rabbit` пустым объектом, и теперь у объекта `rabbit` нет свойства `eats`, которое было унаследовано от старого прототипа.


// Rabbit.prototype.eats = false; // false
// Если перед `console.log` добавить строку `Rabbit.prototype.eats = false;`, то при вызове `console.log(rabbit.eats);` также будет выведено `false`. Это происходит потому, что мы перезаписали свойство `eats` в прототипе конструктора на значение `false`, и теперь у объекта `rabbit` есть свойство с таким же именем, которое перекрывает унаследованное значение.

// delete rabbit.eats; //true
//  Если перед `console.log` добавить строку `delete rabbit.eats;`, то при вызове `console.log(rabbit.eats);` будет выведено значение свойства `eats`, унаследованного от прототипа конструктора `Rabbit`. В данном случае это будет значение `true`, так как мы не перезаписывали свойство `eats` в объекте `rabbit`.

// delete Rabbit.prototype.eats; // undefined
// Если перед `console.log` добавить строку `delete Rabbit.prototype.eats;`, то при вызове  `console.log(rabbit.eats);` также будет выведено значение по умолчанию для свойства, которое не определено ни в самом объекте, ни в его прототипе. В данном случае это будет значение undefined. Однако, если мы создадим новый объект `let rabbit2 = new Rabbit();` после удаления свойства `eats` из прототипа, то у него также будет значение по умолчанию для свойства `eats`, т.к. оно не было определено ни в самом объекте, ни в его прототипе.

console.log(rabbit.eats);
