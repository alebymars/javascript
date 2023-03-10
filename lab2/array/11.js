function checkArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return i + 1;
    }
  }
  return false;
}

function reverseArray(arr) {
  return arr.reverse();
}

const arr1 = [5, 4, 3, 2, 1];
const arr2 = [2, 3, 5, 4];

const index = checkArray(arr1);
if (index) {
  console.log(index);
} else {
  console.log(reverseArray(arr1));
}

const index2 = checkArray(arr2);
if (index2) {
  console.log(index2);
} else {
  console.log(reverseArray(arr2));
}
