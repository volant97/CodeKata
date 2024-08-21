function solution(n_str) {
  return Number(n_str).toString();
}

// 다른풀이1
const solution = (str) => String(Number(str));

// 다른풀이2
const solution = (s) => +s + "";

// 다른풀이3
function solution(n_str) {
  return n_str.replace(/^0+/, "");
}

// 다른풀이4
const solution = (str) => String(parseInt(str));
