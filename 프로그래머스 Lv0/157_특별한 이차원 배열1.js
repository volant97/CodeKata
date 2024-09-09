function solution(n) {
  const arr = new Array(n).fill(0);
  let result = [];

  for (let j = 0; j < n; j++) {
    const pushArr = arr.map((v, i) => (i === j ? 1 : v));
    result.push(pushArr);
  }

  return result;
}

// 다른풀이1
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}

// 다른풀이2
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) =>
      Array(n)
        .fill()
        .map(($, j) => (i === j ? 1 : 0))
    );
}
