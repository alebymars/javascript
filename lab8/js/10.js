document.addEventListener("click", function viewCoordinateClick(event) {
  const x = event.clientX;
  const y = event.clientY;
  document.getElementById(
    "mouseCoordinate"
  ).textContent = `Координаты: ${x}:${y}`;
});

// document.addEventListener("click", function (event) {
//     var x = event.clientX; // получаем координаты по оси X
//     var y = event.clientY; // получаем координаты по оси Y

//     alert("Координаты: " + x + ", " + y); // выводим координаты в диалоговом окне
//   });
