// 짝수의 합

const solution = (n) => {
  let number = 0
  for(let i=2; i<=n; i+=2) {
    number += i
  }
  return number
}

console.log(solution(10));  // 2+4+6+8+10 = 30
console.log(solution(4));  // 2+4 = 6
console.log(solution(6));  // 2+4+6 = 12


// 다른 풀이 1 - 가우스의 덧셈
function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}


// 2 4 6 8 10   10

// 2+10 12  6*2
// 4+8 12  6*2
// 6   6

// 5*6    (10/2)*(10/2 + 1)

// 다른 풀이 2
// function solution(n) {
//   // return new Array(n).fill(1).map((el, idx) => (el * idx) + 1).filter((el) => el % 2 === 0).reduce((acc, cur) => acc + cur)
//   let answer = 0
//   for (let i = 1; i <= n; i++) {
//       if (i % 2 === 0) {
//           answer += i            
//       }
//   }
//   return answer
// }


// 제출