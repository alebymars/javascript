function checkPoint() {
  let x1 = Number(document.getElementById("x1").value);
  let y1 = Number(document.getElementById("y1").value);
  let x2 = Number(document.getElementById("x2").value);
  let y2 = Number(document.getElementById("y2").value);
  let x = Number(document.getElementById("x").value);
  let y = Number(document.getElementById("y").value);

  if (
    ((x >= x1 && x <= x2) || (x >= x2 && x <= x1)) &&
    ((y >= y1 && y <= y2) || (y >= y2 && y <= y1))
  ) {
    document.getElementById("result").innerHTML =
      "Ответ: Точка принадлежит квадрату.";
  } else {
    document.getElementById("result").innerHTML =
      "Ответ: Точка не принадлежит квадрату.";
  }
}
