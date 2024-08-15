function solution(a, b) {
  const first = Number(a.toString() + b.toString());
  const second = 2 * a * b;
  return first >= second ? first : second;
}

// 다른풀이1
// a+"" 스트링변환
// (a+""+b) 만 해도 가능
function solution(a, b) {
  let num1 = parseInt(a + "" + b + "");
  let num2 = 2 * a * b;
  return num1 > num2 ? num1 : num2;
}

// 다른풀이2
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), a * b * 2);
}
