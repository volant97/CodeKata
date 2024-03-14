// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  let answer = [];
  for(let i=1; i<=n; i++)
    answer.push(i*x)
  return answer;
}

console.log(solution(2, 5));  // [2,4,6,8,10]
console.log(solution(4, 3));  // [4,8,12]
console.log(solution(-4, 2));  // [-4, -8]


// 다른 풀이 1
// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }
