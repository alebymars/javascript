document.addEventListener("click", function viewCoordinateClick(event) {
  const x = event.clientX;
  const y = event.clientY;
  document.getElementById(
    "mouseCoordinate"
  ).textContent = `Координаты: ${x}:${y}`;
});
