function ageFunc(age) {
  if (age < 18) {
    return console.log("Привет, малыш!");
  } else if (age >= 18) {
    return console.log("Привет, юноша!");
  }
}

ageFunc(0);
