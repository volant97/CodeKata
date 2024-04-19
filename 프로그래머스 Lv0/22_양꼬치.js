function solution(n, k) {
  const lambSkewers = n * 12000;
  const drinks = k * 2000;
  const free = Math.floor(n / 10) * 2000;

  return lambSkewers + drinks - free;
}
