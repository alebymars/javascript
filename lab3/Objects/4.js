// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// Запустите и разберите следующий код:

const user = {
  name: "John",
};

console.log(user); // { name: 'John' }

// это будет работать?
user.name = "Pete";
// можно изменить объект, объявленный с помощью const, но нельзя переназначить переменную.
console.log(user); // { name: 'Pete' }

// а это?
// user = 123; // TypeError: Assignment to constant variable.
