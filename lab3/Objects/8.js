// Создайте функцию-конструктор класса Browser со свойствами name и version.
// При помощи конструктора создать объект myBrowser со значениями name = “Microsoft Internet Explorer” и version = «9.0».
// Вывести значения свойств на экран. Добавить к функции-конструктору класса Browser метод aboutBrowser, который будет выводить на экран информацию о свойствах этого объекта.

function Browser(name, version) {
  this.name = name;
  this.version = version;
  this.aboutBrowser = function () {
    console.log(`name: ${this.name}, version: ${this.version}`);
  };
}

const myBrowser = new Browser("Microsoft Internet Explorer", "9.0");

console.log(myBrowser.name);
console.log(myBrowser.version);

console.log(" ");

myBrowser.aboutBrowser();
