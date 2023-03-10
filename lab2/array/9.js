function median(arr1, arr2) {
  const arr = [...arr1, ...arr2].sort((a, b) => a - b);
  //   console.log("arr => ", arr);
  const mid = Math.floor(arr.length / 2);
  //   console.log("mid => ", mid);
  return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

const arr1 = [1, 2, 5, 4, 6, 8];
const arr2 = [2, 5, 9, 5];

console.log("median (чет кол-во) => ", median(arr1, arr2));
console.log("median (нечет кол-во) => ", median([1, 2], [5, 4, 6]));
