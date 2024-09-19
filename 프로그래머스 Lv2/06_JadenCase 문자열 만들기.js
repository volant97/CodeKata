function solution(s) {
  return s
    .split(" ")
    .map((v) => {
      return v
        .split("")
        .map((v, i) => {
          if (i === 0) {
            return v.toUpperCase();
          } else {
            return v.toLowerCase();
          }
        })
        .join("");
    })
    .join(" ");
}

// 개선
function solution(s) {
  return s
    .split(" ")
    .map((v) => {
      return v
        .split("")
        .map((v, i) => {
          return i === 0 ? v.toUpperCase() : v.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}

// 다른풀이1
// v.charAt(0)은 문자열의 첫 번째 문자를 반환
// v.substring(1)은 문자열의 첫 번째 문자를 제외한 나머지 문자열을 반환
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
