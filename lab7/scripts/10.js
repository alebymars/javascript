function generateArray() {
  let n = document.getElementById("input").value;
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 100)); // Генерируем случайное число от 0 до 99 и добавляем его в массив
  }
  let reversedArray = array.reverse(); // Создаем новый массив, содержащий числа в обратном порядке
  let output = "";
  for (let i = 0; i < reversedArray.length; i++) {
    output += reversedArray[i] + " "; // Добавляем число и пробел к строке вывода
    if ((i + 1) % 5 == 0) {
      output += "\n"; // Добавляем перевод строки после каждой пятой цифры
    }
  }
  document.getElementById("output").value = output; // Выводим результат в текстовое поле
}
