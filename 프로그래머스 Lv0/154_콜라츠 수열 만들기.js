function solution(n) {
  let result = [n];
  let num = n;

  for (let i = 0; i < i + 1; i++) {
    num = num % 2 === 0 ? num / 2 : 3 * num + 1;
    result.push(num);
    if (num === 1) break;
  }

  return result;
}

// 다른풀이1
// 재귀함수
function solution(n, arr = []) {
  arr.push(n);
  if (n === 1) return arr;
  if (n % 2 === 0) return solution(n / 2, arr);
  return solution(3 * n + 1, arr);
}
