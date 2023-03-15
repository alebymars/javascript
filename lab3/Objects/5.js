// Создайте функцию multiplyNumeric(obj),
// которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      console.log(`${obj[key]} is Number, * 2 = ${(obj[key] *= 2)}`);
      //   obj[key] *= 2;
    }
  }
}

// Проверка
const menu = {
  width: 200,
  height: 300,
  title: "My menu",
  id: 5,
};

multiplyNumeric(menu);
