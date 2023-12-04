// 제일 작은 수 제거하기

function solution(arr) {
  const minNum = Math.min(...arr);
  const minNumIndex = arr.indexOf(minNum);
  arr.splice(minNumIndex, 1);
  return (answer = arr.length === 0 ? [-1] : arr);
}

console.log(solution([4, 3, 2, 1])); //[4,3,2]

// 다른 풀이 1
// function solution(arr) {
//   arr.splice(arr.indexOf(Math.min(...arr)),1);
//   if(arr.length<1)return[-1];
//   return arr;
// }
