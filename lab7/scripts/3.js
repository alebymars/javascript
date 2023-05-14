function findN() {
  let n = Number(document.getElementById("n").value);
  let x0 = 1;
  let x1 = 1;
  let xn;
  if (n == 0) {
    xn = x0;
  } else if (n == 1) {
    xn = x1;
  } else {
    for (let i = 2; i <= n; i++) {
      xn = x0 + x1;
      x0 = x1;
      x1 = xn;
    }
  }
  document.getElementById("result").innerHTML = "Ответ: x<sub>" + n + "</sub> = " + xn;
}
