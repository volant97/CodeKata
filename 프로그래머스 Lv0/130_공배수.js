function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

// 다른풀이1
// 논리부정 -> 시간 측면에서 이점
function solution(number, n, m) {
  return +!(number % n || number % m);
}
