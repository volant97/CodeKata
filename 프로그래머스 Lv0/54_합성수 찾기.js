function solution(n) {
  let result = 0;
  let count = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count >= 3) result++;
    count = 0;
  }

  return result;
}

// 다른풀이1
// count를 for문 안쪽에 선언하면 =0으로 초기화 안해도 됨
function solution(n) {
  let answer = 0;
  for (i = 1; i <= n; i++) {
    let counter = 0;
    for (j = 1; j <= i; j++) {
      if (i % j == 0) {
        counter += 1;
      }
    }
    if (counter > 2) {
      answer += 1;
    }
  }
  return answer;
}
