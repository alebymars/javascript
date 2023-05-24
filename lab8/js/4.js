const table = document.getElementById("test-table");
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  let cells = rows[i].cells;
  for (let j = 0; j < cells.length; j++) {
    let cellValue = table.rows[i].cells[j].innerHTML;
    let a = cellValue.split(":")[0];
    let b = cellValue.split(":")[1];
    let result = +a + +b;
    if (result % 2 === 0) {
      cells[j].style.backgroundColor = "red";
    }
  }
}
