// Вы работаете оператором на складе. Время от времени вам привозят новые коробки.
// Каждая коробка имеет свою грузоподъемность wi и объем vi. Получая новую
// коробку, вы ставите на ней серийный номер, используя все целые неотрицательные
// числа последовательно, начиная с нуля.
// Иногда вас просят выдать коробку минимальной грузоподъемности, чтобы она
// выдержала предмет весом w — или коробку минимальной вместимости, в которую
// можно насыпать песок объемом v. Вам нужно быстро определять серийный номер
// коробки, которая будет выдана. После выдачи коробки обратно на склад не
// возвращаются. Если подходящих коробок несколько, нужно выбрать ту, которая
// пролежала на складе меньше.
// Нужно реализовать класс Stock, у которого, среди прочих, будет три метода:
//  add(int w, int v); — добавить коробку на склад;
//  getByW(int min_w); — вернуть номер коробки грузоподъемности, хотя бы
// minw;
//  getByV(int min_v); — вернуть номер коробки объема, хотя бы minv.
// Если подходящей коробки нет, соответствующая функция должна вернуть −1.
// Продемонстрируйте и протестируйте работу всех методов класса.

class Stock {
  constructor() {
    this.boxes = [];
  }

  add(w, v) {
    this.boxes.push({ w, v, time: Date.now() });
  }

  getByW(min_w) {
    let result = -1;
    let min_time = Infinity;
    for (let i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].w >= min_w && this.boxes[i].time < min_time) {
        result = i;
        min_time = this.boxes[i].time;
      }
    }
    return result;
  }

  getByV(min_v) {
    let result = -1;
    let min_time = Infinity;
    for (let i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].v >= min_v && this.boxes[i].time < min_time) {
        result = i;
        min_time = this.boxes[i].time;
      }
    }
    return result;
  }
}

const stock = new Stock();
stock.add(10, 10);
stock.add(20, 20);
stock.add(30, 30);
stock.add(40, 40);
stock.add(50, 50);
stock.add(60, 60);
stock.add(70, 70);
stock.add(80, 80);
stock.add(90, 90);
stock.add(100, 100);

console.log(stock.getByW(8)); //0
console.log(stock.getByV(50)); //4
console.log(stock.getByW(100)); //9
console.log(stock.getByV(100)); //9
