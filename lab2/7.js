function rekursia(n) {
  if (n == 0) {
    return 1;
  }
  const prevSin = Math.sin(rekursia(n - 1));
  return prevSin + n;
}

console.log(rekursia(5));
