function reverseArray() {
  let input = document.getElementById("input").value;
  let array = input.split(",").map(Number); // Разбиваем строку на массив чисел
  let reversedArray = array.reverse(); // Создаем новый массив, содержащий числа в обратном порядке
  let output = reversedArray.join(", "); // Объединяем числа в строку, разделенную запятыми и пробелами
  if (array.length < 10) {
    document.getElementById("output").value =
      "Вы не ввели нужное количество чисел";
  } else {
    document.getElementById("output").value = output;
  }
}
