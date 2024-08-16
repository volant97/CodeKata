function solution(a, b) {
  return Math.max(a + "" + b, b + "" + a);
}

// 다른풀이1
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

// 다른풀이2
function solution(a, b) {
  const calculate = (a, b) => +`${a}${b}`;
  return Math.max(calculate(a, b), calculate(b, a));
}
