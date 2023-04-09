// Асинхронная функция f(x)
function f(x, callback) {
  setTimeout(() => {
    const result = x * x;
    console.log("f(" + x + ") = " + result);
    callback(result);
  }, Math.floor(Math.random() * 1000));
}

// Функция F(x)
function F(x, n) {
  let result = "";

  // Функция-уведомитель
  function notify(i, value) {
    result += value;

    if (i < n) {
      console.log("f" + i + "(" + x + ") = " + value);
      console.log("Intermediate result: " + result);
      runAsync(i + 1);
    } else {
      console.log("f" + i + "(" + x + ") = " + value);
      console.log("F(" + x + ") = " + result);
    }
  }

  // Запуск асинхронной функции
  function runAsync(i) {
    switch (i) {
      case 1:
        f(x, (value) => notify(i, value));
        break;
      case 2:
        f(2 * x, (value) => notify(i, value));
        break;
      case 3:
        f(-2, (value) => notify(i, value));
        break;
      default:
        console.error("Invalid function number: " + i);
    }
  }

  // Запуск цепочки асинхронных функций
  runAsync(1);
}

// Вызов функции F(x)
F(3, 6);
