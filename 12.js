// 평균 구하기

const solution = (arr) => {
 let answer = 0;
 for (i=0; i<arr.length; i++) {
  answer += arr[i]
 }
 return answer/arr.length
}

console.log(solution([1,2,3,4]));  // 2.5
console.log(solution([5,5]));  // 5


// 다른 풀이 1
// function average(array){
//   return array.reduce((a,b) => a+b) / array.length;
// }

// 다른 풀이 2 - for문 짧게 쓰는 방법
// function average(array){
//   var sum = 0;

//     for(var info of array){
//     sum += info;
//   }

//   return sum/array.length;
// }


// 제출