function solution(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

// 다른풀이1
const solution = (a, b) => String(BigInt(a) + BigInt(b));

// 다른풀이2
function solution(a, b) {
  var answer = BigInt(a) + BigInt(b);
  return answer + "";
}
