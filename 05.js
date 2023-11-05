// 숫자 비교하기

// 풀이 1
// function solution(num1, num2) {
//   if (num1 === num2) {
//     return 1
//   } else {
//     return -1
//   }
// }

// 풀이 2 - 삼항연산자
const solution = (num1, num2) => (num1 === num2) ? 1 : -1;

console.log(solution(2, 3));
console.log(solution(11, 11));
console.log(solution(7, 99));


// 다른 풀이
