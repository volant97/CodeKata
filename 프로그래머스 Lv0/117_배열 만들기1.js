function solution(n, k) {
  const result = [];

  for (let i = 1; i < i + 1; i++) {
    if (k * i > n) break;
    result.push(k * i);
  }

  return result;
}

// 다른풀이1
function solution(n, k) {
  var answer = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}
