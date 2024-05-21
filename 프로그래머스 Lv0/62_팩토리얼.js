function solution(n) {
  const factorial = (n) => {
    return n === 0 ? 1 : n * factorial(n - 1);
  };

  for (let i = 0; i <= 10; i++) {
    if (factorial(i) > n) return i - 1;
  }
}
