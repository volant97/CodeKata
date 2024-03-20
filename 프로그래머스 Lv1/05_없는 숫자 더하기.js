function solution(numbers) {
  let answer = 0;
  const allNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sumAllNum = allNum.reduce((a, b) => a + b);

  numbers = numbers.sort();

  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }

  return sumAllNum - answer;
}

// 다른풀이1
function solution(numbers) {
  let answer = 45;
  for (i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
  }
  return answer;
}

// 다른풀이2
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 다른풀이3
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
