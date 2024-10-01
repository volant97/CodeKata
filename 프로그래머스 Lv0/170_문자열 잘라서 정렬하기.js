function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((v) => v !== "");
}

// 다른풀이1
// filter 부분만 다름
function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((v) => v);
}

// 다른풀이2
const solution = (s) => s.match(/[^x]+/g).sort();
