function sumWithDelay(a, b, delay, iterations) {
  let sum = a + b;
  let count = 1;

  return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      console.log(`Sum: ${sum}, Iteration: ${count}`);
      sum += b;
      count++;

      if (count > iterations) {
        clearInterval(intervalId);
        console.log(`Final Sum: ${sum}, Total Iterations: ${count - 1}`);
        resolve(sum);
      }
    }, delay);
  });
}

sumWithDelay(1, "2", 2000, 5);
