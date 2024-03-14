// 수박수박수박수박수박수?

function solution(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += "박";
    } else {
      result += "수";
    }
  }
  return result;
}

console.log(solution(3)); // "수박수"
console.log(solution(4)); // "수박수박"

// 다른 풀이 1
// function solution1(n) {
//   console.log("수박".repeat(n).substring(0, n));
//   return "수박".repeat(n).substring(0, n);
// }

// 다른 풀이 2
// function waterMelon(n){
//   var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
//   //함수를 완성하세요

//   return result.substring(0,n);
// }
