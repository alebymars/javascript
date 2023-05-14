function createCar() {
  const color = document.getElementById("color").value;
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;

  const car = {
    color: color,
    brand: brand,
    model: model,
  };

  document.getElementById(
    "result"
  ).innerHTML = `Цвет: ${car.color}<br>Марка: ${car.brand}<br>Модель: ${car.model}`;
}
