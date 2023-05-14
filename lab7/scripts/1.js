function calculate() {
  let x = document.getElementById("x").value;
  let result = Math.sin(x);
  document.getElementById("result").innerHTML = "Ответ: sin(" + x + ") = " + result;
}
