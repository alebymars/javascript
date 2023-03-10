function sumMaxRowValuesAndProductOfMinColumnValues(matrix) {
  let maxRowValuesSum = 0;
  let minColumnValuesProduct = 1;

  for (let i = 0; i < matrix.length; i++) {
    let maxRowValue = matrix[i][0];

    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxRowValue) {
        maxRowValue = matrix[i][j];
      }
    }

    maxRowValuesSum += maxRowValue;
  }

  for (let j = 0; j < matrix[0].length; j++) {
    let minColumnValue = matrix[0][j];

    for (let i = 1; i < matrix.length; i++) {
      if (matrix[i][j] < minColumnValue) {
        minColumnValue = matrix[i][j];
      }
    }

    minColumnValuesProduct *= minColumnValue;
  }

  return [maxRowValuesSum, minColumnValuesProduct];
}

//пример

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [maxRowValuesSum, minColumnValuesProduct] =
  sumMaxRowValuesAndProductOfMinColumnValues(matrix);

console.log(`Сумма наибольших значений элементов ее строк: ${maxRowValuesSum}`);
console.log(
  `Произведение наименьших элементов ее столбцов: ${minColumnValuesProduct}`
);
