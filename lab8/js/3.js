// 1
const tableWithId = document.querySelector("#age-table");
console.log("tableWithId => ", tableWithId);

// 2
const ageTable = document.getElementById("age-table");
const allLabelWithTable = document.querySelectorAll("label");
console.log("all label with table =>", ageTable.querySelectorAll("label"));

// 3
const findAge = ageTable.querySelector("td");
console.log(findAge.textContent);

// 4
const findFormWithNameSearch = document.getElementsByName("search")[0];
console.log("findFormWithNameSearch =>", findFormWithNameSearch);

// 5
const firstInputWithSearchForm =
  findFormWithNameSearch.getElementsByTagName("input")[0];
console.log("irstInputWithSearchForm =>", firstInputWithSearchForm);

// 6
const lastInputWithSearchForm =
  findFormWithNameSearch.querySelectorAll("input");
console.log(
  "lastInputWithSearchForm =>",
  lastInputWithSearchForm[lastInputWithSearchForm.length - 1]
);
