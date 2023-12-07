// 내적

function solution(a, b) {
  let answer = 0;
  for (i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 	3

// 다른 풀이 1
// function solution(a, b) {
//     return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// }

// 인자에 _ 를 넣는 것은 사용하지 않는 인자일 경우 넣는 것으로 알고 있습니다.
// 딱히 정해진 건 아니고 국룰 느낌~?

// arr.reduce((acc, cur, idx)
// accumulator - accumulator는 callback함수의 반환값을 누적합니다.
// currentValue - 배열의 현재 요소
// index(Optional) - 배열의 현재 요소의 인덱스
// array(Optional) - 호출한 배열
