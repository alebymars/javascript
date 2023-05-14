function countOccurrences() {
  let s1 = document.getElementById("s1").value;
  let s2 = document.getElementById("s2").value;

  document.getElementById("result").innerHTML =
    "Первый символ строки s1 встречается " +
    [...s1].filter((x) => x === s2[0]).length +
    " раз(а) в строке s2.";
}
