// 짝수와 홀수

const solution = (num) => {
 let answer = num%2 === 0 ? "Even" : "Odd"
 return answer
}

console.log(solution(3));  // "Odd"
console.log(solution(4));  // "Even"


// 다른 풀이
// 0은 false라는 것을 이용
// function solution(num) {
//   return num % 2 ? "Odd" : "Even"
// }

// 제출