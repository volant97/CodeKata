function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

// 다른풀이1
// isInteger : 정수 판별
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
