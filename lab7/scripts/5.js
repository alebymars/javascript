function validateEmail() {
  var email = document.getElementById("email").value;
  if (email.includes("@")) {
    document.getElementById("result").innerHTML =
      "Ответ: Адрес электронной почты введен корректно.";
  } else {
    document.getElementById("result").innerHTML =
      "Ответ: Адрес электронной почты введен некорректно. Пожалуйста, введите корректный адрес.";
  }
}
