const fibsRec = (index) => {
  return index < 2 ? index : fibsRec(index - 2) + fibsRec(index - 1);
};

fibsRec(8);

const fibs = (n) => {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
};

fibs(8);
