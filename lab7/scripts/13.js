function calculateMonths() {
  const currentDate = new Date();
  const september1st = new Date(currentDate.getFullYear(), 8, 1);

  let monthsLeft = (september1st.getMonth() + 12 - currentDate.getMonth()) % 12;

  document.getElementById(
    "result"
  ).innerHTML = `Ответ: ${monthsLeft} месяца(ев) осталось до 1 сентября!`;
}
