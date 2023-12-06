// 가운데 글자 가져오기

// function solution(s) {
//   let answer = "";
//   const arr = [...s];
//   const half = Math.floor(arr.length / 2);
//   if (arr.length % 2 === 0) {
//     console.log("console :", s.substr(half - 1, 2));
//     return (answer = arr.slice(half - 1, half + 1).join(""));
//   } else {
//     console.log("console :", s.substr(half, 1));
//     return (answer = arr.slice(half, half + 1).join(""));
//   }
// }

console.log(solution("abcde")); //"c"
console.log(solution("qwer")); //"we"

// 다른 풀이 1
// function solution(s) {
//   return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }

// 내가 푼 다른 풀이
function solution(s) {
  const arr = [...s];
  const half = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (answer = s.substr(half - 1, 2));
  } else {
    return (answer = s.substr(half, 1));
  }
}
