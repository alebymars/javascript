function printMatrixElements(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] >= -5 && matrix[i][j] <= 7) {
        console.log(matrix[i][j]);
      }
    }
  }
}

// Пример использования функции
const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [-5, -4, -3, -2, -1],
  [0, 1, 2, 3, 4],
];
printMatrixElements(matrix);
