// 자연수 뒤집어 배열로 만들기

function solution(n) {
  const answer = String(n).split("").reverse().map(i => parseInt(i));
  return answer;
}

console.log(solution(12345));  // [5,4,3,2,1]



// parseInt vs Number


// 다른 풀이 1
// function solution(n) {
//   var answer = [];
//   n = n + "";
//   for (var i = n.length - 1; i >= 0; i--) {
//       answer.push(Number(n[i]));
//   }
//   return answer;
// }