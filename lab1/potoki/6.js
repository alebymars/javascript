// Написать код возведения х в степень y, используя цикл while.

var x = 2;
var y = 3;
var result = 1;
var i = 0;

while (i < y) {
  result *= x;
  i++;
}

console.log(result);
