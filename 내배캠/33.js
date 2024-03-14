// 약수의 개수와 덧셈

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// 해설
// 특정수의 제곱근을 했을때 결과값이 정수라면 약수의 갯수가 홀수 라는것
// 정수 : Integer
// 제곱근 : square root
