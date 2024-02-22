const fibonacci = (n) => {
  const fib = [0, 1];
  for (let index = 2; index < n; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
  }
  return fib;
};
