function removeDuplicates() {
  let input = document.getElementById("input").value;
  let words = input.split(/\s+/); // Разбиваем строку на массив слов
  let uniqueWords = [...new Set(words)]; // Создаем новый массив, содержащий только уникальные слова
  let output = uniqueWords.join(" "); // Объединяем уникальные слова в строку, разделенную пробелами
  document.getElementById("output").value = output; // Выводим результат в текстовое поле
}
