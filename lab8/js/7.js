const ul = document.createElement("ul");

while (true) {
  const data = prompt("Введите содержимое для пункта списка: ", "");
  if (!data) {
    break;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(data));
  ul.appendChild(li);
}

document.body.appendChild(ul);
