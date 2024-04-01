function solution(n) {
  const piece = 7;

  for (let i = 1; i < i + 1; i++) {
    if ((piece * i) / n >= 1) {
      return i;
    }
  }
}

// 다른풀이1
function solution(n) {
  return Math.ceil(n / 7);
}
