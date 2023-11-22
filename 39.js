// 최대공약수와 최소공배수

function solution(n, m) {
  let answer = [];
  let minN = Math.min(n, m);
  let maxN = Math.max(n, m);
  answer[0] = gcd(minN, maxN);
  answer[1] = lcm(minN, maxN);
  return answer;
}
// 최대공약수
// 재귀함수
function gcd(minN, maxN) {
  return minN % maxN === 0 ? maxN : gcd(maxN, minN % maxN);
}
// 최소공배수 : 두 수의 곱 = 최대공약수 * 최소공배수 따라서, 최소공배수 = 두 수의 곱 / 최대공약수
function lcm(minN, maxN) {
  return (minN * maxN) / gcd(minN, maxN);
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]

// 다른 풀이 1
// function gcdlcm(a, b) {
//   var r;
//   for (var ab = a * b; (r = a % b); a = b, b = r) {}
//   return [b, ab / b];
// }

// 다른 풀이 2
// function solution(num1, num2) {
//   const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
//   const lcm = (a, b) => (a * b) / gcd(a, b);
//   return [gcd(num1, num2), lcm(num1, num2)];
// }
