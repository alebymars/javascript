let array = ["1", "2", "3"];

console.log(array[2]);
console.log(array.length);

array.splice(1, 1);
console.log(array);

while (array.length > 0) {
  console.log(array.pop());
}
