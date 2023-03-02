let x = 6;

switch (x) {
  case 1:
    console.log(`${x} ворона`);
    break;
  case 2:
  case 3:
  case 4:
    console.log(`${x} вороны`);
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log(`${x} ворон`);
    break;
  default:
    console.log("столько ворон не бывает...");
    break;
}
