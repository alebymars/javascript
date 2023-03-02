const One = 2;
const Two = 2;

console.log("\nЗадание 2: ");
if (One == Two) {
  console.log(`1. One = ${One}, Two = ${Two}, следовательно One = Two (TRUE)`);
} else {
  console.log(
    `1. One = ${One}, Two = ${Two}, следовательно One != Two (FALSE)`
  );
}

if (One < Two) {
  console.log(`2. One = ${One}, Two = ${Two}, следовательно One < Two (TRUE)`);
} else {
  console.log("2. Т.к. One == Two, мы пропускаем ответ (FALSE)");
}

if (One <= Two) {
  console.log(`3. One = ${One}, Two = ${Two}, следовательно One <= Two (TRUE)`);
} else {
  console.log(
    `3. One = ${One}, Two = ${Two}, следовательно One >= Two (FALSE)`
  );
}

if (One > Two) {
  console.log(`4. One = ${One}, Two = ${Two}, следовательно One > Two (TRUE)`);
} else {
  console.log(
    `4. Т.к. One == Two, мы пропускаем ответ (FALSE)`
  );
}

console.log("Задание 2 закончено.");
