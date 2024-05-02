function solution(n) {
  for (let i = 1; i < i + 1; i++) {
    const piece = 6 * i;
    if (piece % n === 0) return i;
  }
}

// 개선
// for문 무한루프
function solution(n) {
  for (let i = 1; ; i++) {
    const piece = 6 * i;
    if (piece % n === 0) return i;
  }
}

// 다른풀이1
// while
function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}
