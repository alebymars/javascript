function ask_password(login, password, success, failure) {
  const symbols = ["a", "e", "i", "o", "u", "y"];
  const loginConsonants = login
    .toLowerCase()
    .split("")
    .filter((char) => !symbols.includes(char));
  const passwordConsonants = password
    .toLowerCase()
    .split("")
    .filter((char) => !symbols.includes(char));
  const passwordVowels = password
    .toLowerCase()
    .split("")
    .filter((char) => symbols.includes(char));

  if (
    passwordVowels.length !== 3 ||
    passwordConsonants.length !== loginConsonants.length
  ) {
    failure(login, "Everything is wrong");
    return;
  }

  for (let i = 0; i < loginConsonants.length; i++) {
    if (!passwordConsonants.includes(loginConsonants[i])) {
      failure(login, "Wrong consonants");
      return;
    }
  }

  success(login);
}

function main(login, password) {
  ask_password(
    login,
    password,
    function (login) {
      console.log("Привет,", login + "!");
    },
    function (login, error) {
      console.log(
        `Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${error.toUpperCase()}.`
      );
    }
  );
}

main("login", "aaalgn"); // Привет, login!
main("login", "luagon"); // Привет, login!
main("login", "aaaagn"); // Кто-то пытался притвориться пользователем login, но в пароле допустил ошибку: WRONG CONSONANTS.
main("login", "aaalgnn"); // Кто-то пытался притвориться пользователем login, но в пароле допустил ошибку: WRONG NUMBER OF SYMBOLS.
main("login", "aaaaggg"); // Кто-то пытался притвориться пользователем login, но в пароле допустил ошибку: EVERYTHING IS WRONG.
