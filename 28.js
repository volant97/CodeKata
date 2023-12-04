// 없는 숫자 더하기

function solution(numbers) {
  let answer = 45;
  for (i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
  }
  return answer;
}

// 다른 풀이 1
// function solution(numbers) {
//     return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }
