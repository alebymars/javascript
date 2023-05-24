const getData = async () => {
  let sex = ["male", "female"];
  let firstNames = ["Ivan", "Petr", "Anna", "Katya"];
  let lastNames = ["Smith", "Opel", "Bond", "Nuel"];
  let cities = ["Kemerovo", "Novosibirsk", "Moscow", "SPB"];
  let streets = [
    "Krasnaya St.",
    "Vesenya St.",
    "Soviet Ave.",
    "Krasnoarmeyskaya St.",
  ];
  let phonePrefixes = ["900", "923", "983"];

  let data = [];
  let size = Math.floor(Math.random() * 10) + 1; // случайный размер массива от 1 до 10

  for (let i = 0; i < size; i++) {
    let gender = sex[Math.floor(Math.random() * sex.length)];
    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let age = Math.floor(Math.random() * 80) + 5;
    let city = cities[Math.floor(Math.random() * cities.length)];
    let street = streets[Math.floor(Math.random() * streets.length)];
    let address = street + ", " + Math.floor(Math.random() * 100) + ", " + city;
    let phone =
      "+7-" +
      phonePrefixes[Math.floor(Math.random() * phonePrefixes.length)] +
      "-" +
      Math.floor(Math.random() * 900) +
      "-" +
      Math.floor(Math.random() * 9000); // случайный номер телефона

    let human = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender,
      address: address,
      phone: phone,
    };

    await data.push(human);
  }

  createTableWithData(data);
  // сюда вставить код для отображения кнопки "new"
  const newButton = document.getElementById("newButton");
  newButton.style.display = "block";
  return data;
};

const createTableWithData = (data) => {
  const ti = document.getElementById("main");

  let content = [];
  data.map(({ lastName, firstName, age, gender, address, phone }, index) => {
    content.push(`
    <tr id='${index}'>
        <td>${lastName}</td>
        <td>${firstName}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${address}</td>
        <td>${phone}</td>
        <td><input type="button" value="delete" onclick="deleteRecord(${index})"></td>
    </tr>
`);
  });

  const tableWithData = `
  <table id="humansTable" border="1">
    <tr>
        <td colspan="7">Человек</td>
    </tr>
        ${content}
    </table>
    `;

  ti.innerHTML = tableWithData;
  document.body.appendChild(ti);

  const table = document.getElementById("humansTable");
  const rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].cells;
    //   console.log(cells[2].innerHTML);
    let result = cells[2].innerHTML;
    if (result < 18) {
      cells[2].style.backgroundColor = "green";
    } else if (result >= 18 && result <= 59) {
      cells[2].style.backgroundColor = "yellow";
    } else {
      cells[2].style.backgroundColor = "red";
    }
  }
};

const visibleForm = () => {
  const form = document.getElementById("formAddRecord");
  form.style.display = "block";
};

const addNewRecord = (firstName, lastName, age, sex, address, phone) => {
  const lastId = getLastRowId();
  const table = document.getElementById("humansTable");
  const newRow = table.insertRow();
  newRow.id = +lastId + 1;

  const firstNameCell = newRow.insertCell();
  firstNameCell.innerHTML = firstName;

  const lastNameCell = newRow.insertCell();
  lastNameCell.innerHTML = lastName;

  const ageCell = newRow.insertCell();
  ageCell.innerHTML = age;

  const sexCell = newRow.insertCell();
  sexCell.innerHTML = sex;

  const addressCell = newRow.insertCell();
  addressCell.innerHTML = address;

  const phoneCell = newRow.insertCell();
  phoneCell.innerHTML = phone;

  const buttonCell = newRow.insertCell();
  buttonCell.innerHTML = `<input type="button" value="delete" onclick="deleteRecord(${
    +lastId + 1
  })">`;

  const rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].cells;
    //   console.log(cells[2].innerHTML);
    let result = cells[2].innerHTML;
    if (result < 18) {
      cells[2].style.backgroundColor = "green";
    } else if (result >= 18 && result <= 59) {
      cells[2].style.backgroundColor = "yellow";
    } else {
      cells[2].style.backgroundColor = "red";
    }
  }

  console.log("record");
};

const submitForm = () => {
  // Получаем доступ к форме
  const form = document.getElementById("formAddRecord");

  // Получаем значения полей формы
  const firstName = form.elements["firstName"].value;
  const lastName = form.elements["lastName"].value;
  const age = form.elements["age"].value;
  const sex = form.elements["sex"].value;
  const address = form.elements["address"].value;
  const phone = form.elements["phone"].value;

  //   console.log(form.elements["firstName"].value.length);

  addNewRecord(firstName, lastName, age, sex, address, phone);

  form.reset();
  // Делаем что-то с полученными данными
  //   console.log(`Имя: ${firstName}, Фамилия: ${lastName}`);
};

const deleteRecord = (id) => {
  const table = document.getElementById("humansTable");
  const rows = table.getElementsByTagName("tr");

  const idToDelete = id.toString(); // Id записи для удаления
  let rowToDelete = null;

  for (let i = 0; i < rows.length; i++) {
    const id = rows[i].id;

    if (id === idToDelete) {
      rowToDelete = rows[i];
      break;
    }
  }

  if (rowToDelete) {
    rowToDelete.parentNode.removeChild(rowToDelete);
  }
};

const getLastRowId = () => {
  const table = document.getElementById("humansTable");
  const rows = table.getElementsByTagName("tr");

  if (rows.length > 0) {
    const lastRow = rows[rows.length - 1];
    const lastRowId = lastRow.id;

    console.log(`lastRowId => ${lastRowId}`);

    return lastRowId;
  }

  return null;
};

const showOnlyMale = () => {
  const table = document.getElementById("humansTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    if (rows[i].cells[3].textContent == "male") {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
};

const showOnlyFemale = () => {
  const table = document.getElementById("humansTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    if (rows[i].cells[3].textContent == "female") {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
};

const showMaleAndFemale = () => {
  const table = document.getElementById("humansTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    if (rows[i].cells[3].textContent.toLowerCase().includes("male")) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
};
