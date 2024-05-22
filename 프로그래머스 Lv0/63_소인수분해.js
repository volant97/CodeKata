// 다시 한번 복습 필요
// Set + 배열로 변환 (중복 제외)
// for + while
// 소인수분해 방법
function solution(n) {
  const answer = new Set();

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      answer.add(i);
      n /= i;
    }
  }

  return [...answer];
}

// 다른풀이1
// 배열로 구한 후 Set으로 중복 제외 처리
function solution(n) {
  var answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      answer.push(i);
    }
  }

  return [...new Set(answer)];
}
