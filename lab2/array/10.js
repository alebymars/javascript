const array = [11, 10, 15, 0, 7, 6, -2];

(minIndex = array.indexOf(Math.min(...array))),
  (maxIndex = array.indexOf(Math.max(...array)));

[array[minIndex], array[maxIndex]] = [array[maxIndex], array[minIndex]];

console.log(array);
