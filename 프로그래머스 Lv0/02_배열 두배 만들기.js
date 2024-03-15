function solution(numbers) {
  const answer = [];

  // 반복문으로 배열 순서의 값마다 *2
  for (let i = 0; i < numbers.length; i++) {
    const mul = numbers[i] * 2;
    answer.push(mul);
  }

  return answer;
}

// 다른풀이1
// reducs 사용법
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

// 다른풀이2
// map 사용법
const solution = (numbers) => numbers.map((number) => number * 2);
// 또는
function solution(numbers) {
  return numbers.map((number) => number * 2);
}

// 다른풀이3
// for문
// 배열에 push하지 않고 바로 정의
function solution(numbers) {
  var answer = [];

  for (var i = 0; i < numbers.length; i++) {
    answer[i] = numbers[i] * 2;
  }

  return answer;
}
