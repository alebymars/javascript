// import { createTableWithData } from "../js/11";

export const getData = async () => {
  let sex = ["male", "female"];
  let firstNames = ["Ivan", "Petr", "Anna", "Katya"];
  let lastNames = ["Smith", "Opel", "Bond", "Nuel"];
  let cities = ["Kemerovo", "Novosibirsk", "Moscow", "SPB"];
  let streets = [
    "Krasnaya St.",
    "Vesenya St.",
    "Soviet Ave.",
    "Krasnoarmeyskaya St.",
  ];
  let phonePrefixes = ["900", "923", "983"];

  let data = [];
  let size = Math.floor(Math.random() * 10) + 1; // случайный размер массива от 1 до 10

  for (let i = 0; i < size; i++) {
    let gender = sex[Math.floor(Math.random() * sex.length)];
    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let age = Math.floor(Math.random() * 80) + 5;
    let city = cities[Math.floor(Math.random() * cities.length)];
    let street = streets[Math.floor(Math.random() * streets.length)];
    let address = street + ", " + Math.floor(Math.random() * 100) + ", " + city;
    let phone =
      "+7-" +
      phonePrefixes[Math.floor(Math.random() * phonePrefixes.length)] +
      "-" +
      Math.floor(Math.random() * 900) +
      "-" +
      Math.floor(Math.random() * 9000); // случайный номер телефона

    let human = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender,
      address: address,
      phone: phone,
    };

    await data.push(human);
  }
  // показываем кноки
  document.getElementById("newButton").style.display = "block";
  document.getElementById("filterDiv").style.display = "block";
  // document.getElementById("male").style.display = "block";
  // document.getElementById("female").style.display = "block";
  // document.getElementById("all").style.display = "block";

  return data;
};
