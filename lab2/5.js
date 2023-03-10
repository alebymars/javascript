function uFunc(x, y, z) {
  const one = Math.max(x, y) + Math.max(x + y, z);
  const two = Math.max(0.5, x + z) ^ 2;
  const result = one / two;
  return console.log(result);
}

uFunc(1, 2, 3);
