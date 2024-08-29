function solution(number) {
  let sum = 0;
  number.split("").forEach((v) => (sum += Number(v)));
  return sum % 9;
}

// 다른풀이1
const solution = (n) => BigInt(n) % 9n;

// 다른풀이2
function solution(number) {
  return [...number].reduce((a, b) => +a + +b) % 9;
}
