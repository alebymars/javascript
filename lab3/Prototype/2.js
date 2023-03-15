// В данном примере объект `rabbit` получит свойство `full`. 

// Это происходит потому, что при вызове метода `rabbit.eat()`, внутри тела метода `eat()` ключевое слово `this` будет ссылаться на объект `rabbit`, так как метод вызывается на объекте `rabbit`. И при выполнении `this.full = true;` свойство `full` будет добавлено именно в объект `rabbit`.

let animal = { 
    eat() { 
      this.full = true; 
    } 
  }; 
   
  let rabbit = { 
    __proto__: animal 
  }; 
   
  rabbit.eat(); 

console.log(rabbit.full); // true
console.log(animal.full); // undefined