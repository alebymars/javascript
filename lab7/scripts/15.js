function greet(lang, color) {
  let greeting;
  switch (lang) {
    case "ru":
      greeting = "Здравствуйте!";
      break;
    case "en":
      greeting = "Hello!";
      break;
    case "fr":
      greeting = "Bonjour!";
      break;
    case "de":
      greeting = "Guten Tag!";
      break;
    default:
      alert("Ошибка, выбран неверный код языка!");
  }
  if (greeting == undefined) {
    let currentNode = document.querySelector("#result");
    let newNode = document.createElement("p");
    newNode.id = "result";
    newNode.innerHTML =
      "<h2 style='color: #000000;'>Ошибка, вы не указали код языка, повторите попытку!</h2>";
    currentNode.parentNode.replaceChild(newNode, currentNode);
  } else {
    let currentNode = document.querySelector("#result");
    let newNode = document.createElement("p");
    newNode.id = "result";
    newNode.innerHTML =
      "<h2 style='color:" + color + ";'>" + greeting + "</h2>";
    currentNode.parentNode.replaceChild(newNode, currentNode);
  }
}

const run = () => {
  let langInput = prompt("Введите код языка (ru, en, fr, de):");
  let colorInput = prompt(
    "Введите цвет (blue, red... or #ffccff, по умолчанию будет черный)"
  );
  greet(langInput, colorInput);
};
