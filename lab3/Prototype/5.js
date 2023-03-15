function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// Rabbit.prototype = {}; // true
//так как мы удалили свойство `eats` из прототипа `Rabbit`.

// Rabbit.prototype.eats = false; // false
//Так как мы изменили значение свойства `eats` в прототипе `Rabbit`.

// delete rabbit.eats; //true
//Так как мы удалили свойство `eats` из самого объекта `rabbit`.

// delete Rabbit.prototype.eats; // undefined
//так как мы удалили свойство `eats` из прототипа `Rabbit`

console.log(rabbit.eats); // true
