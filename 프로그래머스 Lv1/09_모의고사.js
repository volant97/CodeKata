// 완전탐색
function solution(answers) {
  const h1 = [1, 2, 3, 4, 5];
  const h2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const h3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const h1c = answers.filter((a, i) => a === h1[i % h1.length]).length;
  const h2c = answers.filter((a, i) => a === h2[i % h2.length]).length;
  const h3c = answers.filter((a, i) => a === h3[i % h3.length]).length;

  const max = Math.max(h1c, h2c, h3c);

  const answer = [];
  if (h1c === max) answer.push(1);
  if (h2c === max) answer.push(2);
  if (h3c === max) answer.push(3);
  return answer;
}

// i % h1.length 이해
// 예를 들어 h1의 길이가 5일 때, 0 % 5 === 0, 1 % 5 === 1 , 2 % 5 === 2 …
// 이런 식으로 나머지 연산자를 사용해서 h1 인덱스에 접근할 수 있다.
