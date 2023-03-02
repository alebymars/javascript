const aa = "12";
const b = "7.15";

console.log("\nЗадание 7: ");

const numberA = Number(aa);
const numberB = Number(b);

console.log(`До преобразования типов: \na = ${typeof(aa)}, b = ${typeof(b)} \nПосле преобразования типов: \na = ${typeof(numberA)}, b = ${typeof(numberB)}`)

const temp = numberA % numberB;
console.log(`Остаток от деления ${numberA} на ${numberB} = ${Math.round(temp)}`)

console.log("Задание 7 закончено.");
