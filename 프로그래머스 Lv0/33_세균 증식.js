function solution(n, t) {
  let result = n;
  for (let i = 1; i <= t; i++) {
    result = result * 2;
  }
  return result;
}

// 개선
function solution(n, t) {
  for (let i = 1; i <= t; i++) {
    n *= 2;
  }
  return n;
}

// 다른풀이1
// 시프트 연산자(Shift Operators)
// 비트 단위 왼쪽 시프트
// solution(n, t)
function solution(n, t) {
  return n << t;
}
