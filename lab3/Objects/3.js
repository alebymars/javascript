// Напишите функцию isEmpty(obj),
// которая возвращает true, если у объекта нет свойств, иначе false

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Проверка
console.log(isEmpty({})); // true
console.log(isEmpty({a: 1})); // false