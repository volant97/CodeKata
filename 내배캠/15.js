// 나머지가 1이 되는 수 찾기

const solution = (n) => {
  for(let i=0; i<n; i++){
    if(n % i === 1){return i}
  }
}

console.log(solution(10));  // 3
console.log(solution(12));  // 11


// 다른 풀이 1
// function solution(n, x = 1) {    
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }    
// }
