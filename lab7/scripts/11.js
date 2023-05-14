function generateMatrix() {
  let n = parseInt(document.getElementById("n").value);
  let matrix = [];

  // Заполнение матрицы случайными значениями
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = Math.floor(Math.random() * 10);
    }
  }

  // Вывод матрицы на страницу
  let table = document.getElementById("matrix");
  table.innerHTML = "";
  for (let i = 0; i < n; i++) {
    let row = table.insertRow();
    for (let j = 0; j < n; j++) {
      let cell = row.insertCell();
      cell.innerHTML = matrix[i][j];
    }
  }

  // Замена элементов на диагоналях, кроме наибольшего и наименьшего
  let maxDiagonalElementIndex, minDiagonalElementIndex;
  maxDiagonalElementIndex = minDiagonalElementIndex = 0;

  for (let i = 1; i < n; i++) {
    if (
      matrix[i][i] > matrix[maxDiagonalElementIndex][maxDiagonalElementIndex]
    ) {
      maxDiagonalElementIndex = i;
    }
    if (
      matrix[i][n - i - 1] <
      matrix[minDiagonalElementIndex][n - minDiagonalElementIndex - 1]
    ) {
      minDiagonalElementIndex = i;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j || i + j == n - 1) {
        if (
          i != maxDiagonalElementIndex &&
          j != maxDiagonalElementIndex &&
          i != minDiagonalElementIndex &&
          j != n - minDiagonalElementIndex - 1
        ) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  // Вывод измененной матрицы на страницу
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let cell = table.rows[i].cells[j];
      cell.innerHTML = matrix[i][j];
    }
  }
}
