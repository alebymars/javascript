// Создайте класс Clock. Он должен хранить время (часы, минуты, секунды) и уметь выводить его в консоль

class Clock {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  getTime() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }
}

const time = new Clock(12, 30, 45);
console.log(time.getTime());




class Test {
  constructor(date) {
    this.minutes = date.getMinutes();
    this.hours = date.getHours();
    this.seconds = date.getSeconds();
  }

  getTime() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }
}

const test = new Test(new Date());
console.log(test.getTime());
