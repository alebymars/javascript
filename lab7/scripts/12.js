function addDays() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const days = parseInt(document.getElementById("days").value);
  const currentDate = new Date();
  console.log(days);
  const futureDate = new Date(
    currentDate.getTime() + days * 24 * 60 * 60 * 1000
  );

  document.getElementById(
    "result"
  ).innerHTML = `Добавляем ${days} дней, чтобы получилась дата: ${futureDate.toLocaleDateString(
    "ru-RU",
    options
  )}`;
}
