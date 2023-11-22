// 배열의 평균값

const solution = (numbers) => {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return (answer / numbers.length).toFixed(1);
};

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])); // 94.0

// 다른 풀이 1 - 고차 배열 메소드, reduce 활용법
// 초기값: 0 첫 번째 반복: 0(누적값) + 1(현재값) = 1 두 번째 반복: 1(누적값) + 2(현재값) = 3 세 번째 반복: 3(누적값) + 3(현재값) = 6 네 번째 반복: 6(누적값) + 4(현재값) = 10 최종 반환값: 10
// function solution(numbers) {
//     var answer = numbers.reduce((acc,cur) => acc+cur, 0) / numbers.length;
//     return answer;
// }

// 다른 풀이 2
// function solution(numbers) {
//   var answer = 0;
//   for(i of numbers) {
//       answer += i
//   }
//   return answer / numbers.length;
// }

// 한 줄 풀이
// const solution = (numbers) => (numbers[0] + numbers[numbers.length - 1]) / 2

// 제출
