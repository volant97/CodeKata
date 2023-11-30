// 두 정수 사이의 합

function solution(a, b) {
  let answer = 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}

console.log("solution : ", solution(3, 5)); // 12
console.log("solution : ", solution(3, 3)); // 3
console.log("solution : ", solution(5, 3)); // 12

// 다른 풀이 1
function adder(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

// 다른 풀이 2
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
