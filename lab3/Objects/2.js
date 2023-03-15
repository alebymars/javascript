// Создайте объект myBrowser
// со свойствами name (значение “Microsoft Internet Explorer”) и version (значение «9.0»).
// Выведите значения свойств на экран при помощи цикла for in.


const myBrowser = {
    name: 'Microsoft Internet Explorer',
    version: '9.0'
}

for (let key in myBrowser) {
    console.log(`${key}: ${myBrowser[key]}`);
}