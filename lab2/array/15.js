const booksByAuthors = {
  Пушкин: ["Евгений Онегин", "Капитанская дочка"],
  Есенин: ["Радуница", "Письма матери"],
  Данцова: ["Мой дядя – зомби", "Домовой"],
};

for (const author in booksByAuthors) {
  console.log(`${author}:`);

  for (const book of booksByAuthors[author]) {
    console.log(`- ${book}`);
  }
}
