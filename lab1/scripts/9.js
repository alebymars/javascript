console.log("\nЗадание 9: ");

function validateEmail() {
  let input = document.querySelector("input");
  console.log(input.value);
  const sob = /@/i;

  if (!sob.test(input.value) && input.value.length > 0) {
    alert("Ошибка, email некорректный");
  } else if (sob.test(input.value)) {
    alert(`Ваш email: ${input.value} корректен`);
  } else {
    console.log("Пустая строка");
  }
  return input.value;
}

console.log("Задание 9 закончено.");
