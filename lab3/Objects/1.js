// 1. Выполните следующие действия:
// a. Создайте пустой объект user.
// b. Добавьте свойство name со значением John.
// c. Добавьте свойство surname со значением Smith.
// d. Измените значение свойства name на Pete.
// e. Удалите свойство name из объекта.


const user = new Object();

console.log(user);

user.name = 'John';

console.log(user);

user.surname = 'Smith';

console.log(user);

user.name = 'Pete';

console.log(user);

delete user.name;

console.log(user);