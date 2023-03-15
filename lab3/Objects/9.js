// Создайте объект Сотрудник, который содержит сведения о сотруднике некоторой фирмы, такие как Имя, Отдел, Телефон, Зарплата (использовать функциюконструктор и ключевое слово this) и отображает данные об этом сотруднике (создать метод объекта для отображения данных).
// Создать экземпляр объекта и вывести свойства на экран.

function Employee(name, department, phone, salary) {
  this.name = name;
  this.department = department;
  this.phone = phone;
  this.salary = salary;

  this.showEmployee = function () {
    console.log(
      `name: ${this.name}, department: ${this.department}, phone: ${this.phone}, salary: ${this.salary}`
    );
  };
}

const employee = new Employee("John", "IT", "123456789", 1000);

employee.showEmployee();
