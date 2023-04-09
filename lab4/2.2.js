// Асинхронные функции
function readConfig(name, callback) {
  setTimeout(() => {
    console.log("(1) config from " + name + " loaded");
    callback();
  }, Math.floor(Math.random() * 1000));
}

function doQuery(statement, callback) {
  setTimeout(() => {
    console.log("(2) SQL query executed: " + statement);
    callback();
  }, Math.floor(Math.random() * 1000));
}

function httpGet(url, callback) {
  setTimeout(() => {
    console.log("(3) Page retrieved: " + url);
    callback();
  }, Math.floor(Math.random() * 1000));
}

function readFile(path, callback) {
  setTimeout(() => {
    console.log("(4) Readme file from " + path + " loaded");
    callback();
  }, Math.floor(Math.random() * 1000));
}

// Функция F(x)
function F(x, n) {
  let result = "";

  console.log("start");

  // Функция-уведомитель
  function notify(i, value) {
    result += value;

    if (i < n) {
      runAsync(i + 1);
    } else {
      console.log("end");
      // console.log("Result: " + result);
    }
  }

  // Запуск асинхронной функции
  function runAsync(i) {
    switch (i) {
      case 1:
        readConfig("myConfig", () => notify(i, "A"));
        break;
      case 2:
        doQuery("SELECT * FROM cities", () => notify(i, "B"));
        break;
      case 3:
        httpGet("http://google.com", () => notify(i, "C"));
        break;
      case 4:
        readFile("README.md", () => notify(i, "D"));
        break;
    }
  }

  // Запуск цепочки асинхронных функций
  runAsync(1);
}

// Вызов функции F(x)
F("x", 4);
