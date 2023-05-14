function checkNumber() {
  const number = document.getElementById("number").value;
  let result = "";

  if (number <= 0) {
    result = "Число должно быть натуральным!";
  } else {
    let found = false;

    for (let i = 1; i * i <= number / 2; i++) {
      const j = Math.sqrt(number - i * i);

      if (j === Math.floor(j)) {
        found = true;
        result = `Число ${number} можно представить в виде суммы квадратов ${i}*${i} + ${j}*${j}`;
        break;
      }
    }

    if (!found) {
      result = `Число ${number} нельзя представить в виде суммы двух квадратов натуральных чисел`;
    }
  }

  document.getElementById("result").textContent = result;
}
