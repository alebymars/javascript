function getSum2() {
  while (true) {
    let a = 1;
    let b = 15;
    sum = +a;
    for (let i = a; i <= b; i++) {
      if (i === 5 || i === 7) {
        continue;
      }
      sum += i;
    }
    console.log(sum);
    break;
  }
}

getSum2();
