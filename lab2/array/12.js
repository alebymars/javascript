// Дан одномерный числовой массив. Домножить на 3 все его положительные
// элементы с нечетными индексами; все отрицательные элементы, имеющие четные
// индексы, уменьшить в 5 раз.

function modifyArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && i % 2 !== 0) {
      arr[i] *= 3;
    } else if (arr[i] < 0 && i % 2 === 0) {
      arr[i] /= 5;
    }
  }
  return arr;
}

// Пример использования функции
const arr = [-1, 2, -3, 4, -5, 6, -7, 8, -9];
const modifiedArr = modifyArray(arr);
console.log(modifiedArr);
