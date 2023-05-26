import { getData } from "../modules/humansData.js";

const fetchData = () => {
  getData()
    .then((result) => {
      createTableWithData(result);
      // показываем кноки
      document.getElementById("newButton").style.display = "block";
      document.getElementById("filterDiv").style.display = "block";
    })
    .catch((err) => {
      console.log(err);
    });
};

const createTableWithData = (data) => {
  const ti = document.getElementById("main");

  let content = [];
  data.map(({ lastName, firstName, age, gender, address, phone }, index) => {
    content.push(`
      <tr id='${index}' class="tableTr">
          <td>${lastName}</td>
          <td>${firstName}</td>
          <td>${age}</td>
          <td>${gender}</td>
          <td>${address}</td>
          <td>${phone}</td>
          <td><input type="button" class="button" value="Удалить" onclick="deleteRecord(${index})"></td>
          <td><input id="buttonEdit" type="button" class="buttonEdit" value="Редактировать" onclick="console.log('Редактируем строку #${index}')"></td>
      </tr>
  `);
  });

  const tableWithData = `
    <table id="humansTable" class="humansTable">
      <tr class="tableTr">
          <td colspan="8">Человек</td>
      </tr>
          ${content}
      </table>
  `;

  ti.innerHTML = tableWithData;
  document.body.appendChild(ti);

  colorAge();
};

const colorAge = () => {
  const table = document.getElementById("humansTable");
  const rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].cells;
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
  buttonCell.innerHTML = `<input type="button" value="Удалить" class="button" onclick="deleteRecord(${
    +lastId + 1
  })">`;
  const buttonEdit = newRow.insertCell();
  buttonEdit.innerHTML = `<td><input id=${
    +lastId + 1
  } type="button" class="buttonEdit" value="Редактировать" onclick="editRow(${
    +lastId + 1
  })"></td>`;

  colorAge();
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

  addNewRecord(firstName, lastName, age, sex, address, phone);

  form.reset();
};

const deleteRecord = (id) => {
  const table = document.getElementById("humansTable");
  const rows = table.getElementsByTagName("tr");

  const idToDelete = id.toString(); // id записи для удаления
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
  checkRows();
};

const getLastRowId = () => {
  const table = document.getElementById("humansTable");
  const rows = table.getElementsByTagName("tr");

  if (rows.length > 0) {
    const lastRow = rows[rows.length - 1];
    const lastRowId = lastRow.id;

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

const removeTable = () => {
  const table = document.getElementById("humansTable");
  table.parentNode.removeChild(table);
  document.getElementById("newButton").style.display = "none";
  document.getElementById("formAddRecord").style.display = "none";
  document.getElementById("filterDiv").style.display = "none";
};

const checkRows = () => {
  const table = document.getElementById("humansTable");
  const rows = table.getElementsByTagName("tr");
  if (rows.length === 1) {
    removeTable();
  }
};

window.fetchData = fetchData;
window.visibleForm = visibleForm;
window.showOnlyMale = showOnlyMale;
window.showOnlyFemale = showOnlyFemale;
window.showMaleAndFemale = showMaleAndFemale;
window.submitForm = submitForm;
window.deleteRecord = deleteRecord;
window.checkRows = checkRows;
window.colorAge = colorAge;
// window.editButtons = editButtons;
// window.editRow = editRow;
// window.saveRow = saveRow;
export default {
  fetchData,
  visibleForm,
  showOnlyMale,
  showOnlyFemale,
  showMaleAndFemale,
  submitForm,
  deleteRecord,
  checkRows,
  colorAge,
  // editButtons,
  // editRow,
  // saveRow,
};
