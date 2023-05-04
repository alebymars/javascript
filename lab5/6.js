async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  return wait().then((result) => {
    console.log(result); // здесь будет выведено число 10
    // здесь можно продолжить работу с результатом
  });
}

f();
