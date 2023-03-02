console.log("\nЗадание 8: ");

function solve(x = 7) {
  const tempOne = x * x - 7 * x + 10;
  const tempTwo = x * x - 8 * x + 12;

  const result = tempOne / tempTwo;

  return result;
}

console.log(`result = ${solve()}`);

console.log("Задание 8 закончено.");
