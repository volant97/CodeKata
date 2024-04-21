function solution(sides) {
  const arr = sides.sort((a, b) => a - b);
  return arr[2] < arr[0] + arr[1] ? 1 : 2;
}

// 다른풀이1
// 구조분해할당
function solution(sides) {
  const [long, a, b] = sides.sort((a, b) => b - a);
  return long < a + b ? 1 : 2;
}

// 다른풀이2
// max
function solution(sides) {
  var answer = 0;
  const max = Math.max(...sides);
  const sum = sides.reduce((a, b) => a + b, 0) - max;

  answer = max < sum ? 1 : 2;

  return answer;
}
