// 효율성 문제
// Math.max() : 배열은 전달하면 NaN 출력 → 스프레드(...) 연산자 사용해서 요소들을 분해하고 전달
function solution(arr) {
  const length = arr.length;
  const max = Math.max(...arr);

  return length === max ? true : false;
}

// 오답
// for문으로 접근 : 효율성이 너무 좋지 않다.
function solution(arr) {
  arr.sort();
  let answer = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      answer = false;
      break;
    }
  }

  return answer;
}

// 다른풀이1
function solution(arr) {
  return arr.sort((a, b) => a - b).every((a, i) => a === i + 1);
}
