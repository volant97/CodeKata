function solution(myString) {
  return myString
    .split("")
    .map((v) => (v.charCodeAt() < 108 ? "l" : v))
    .join("");
}

// 다른풀이1
// 정규식
const solution = (myString) => myString.replace(/[a-k]/g, "l");

// 다른풀이2
// 알파벳끼리 크고 작은지 비교 가능
function solution(myString) {
  return [...myString].map((v) => (v < "l" ? "l" : v)).join("");
}
