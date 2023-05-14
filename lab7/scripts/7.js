function countLatinLetters() {
  var s = document.getElementById("s").value;

  var latinCount = 0;
  var totalChars = s.length;

  for (var i = 0; i < s.length; i++) {
    if (
      (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
    ) {
      latinCount++;
    }
  }

  var percentage = (latinCount / totalChars) * 100;

  document.getElementById("result").innerHTML =
    "Ответ: Доля символов латинского алфавита в строке: " +
    percentage.toFixed(2) +
    "%";
}
