let countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
let population = [5.5, 10.23, 6.0, 5.31, 0.33];

const result = countries.map((city, i) => `${city}: ${population[i]}`);
console.log(result);
