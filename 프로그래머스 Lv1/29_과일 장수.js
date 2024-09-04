function solution(k, m, score) {
  let arr = [];
  const boxArr = [];
  const sortArr = score
    .sort((a, b) => b - a)
    .forEach((v, i) => {
      arr.push(v);
      if ((i + 1) % m === 0) {
        boxArr.push(arr);
        arr = [];
      }
    });

  let result = 0;
  boxArr.forEach((v) => {
    result += Math.min(...v) * m;
  });

  return result;
}

// 개선
// 불필요한 로직 제거
function solution(k, m, score) {
  let result = 0;

  score
    .sort((a, b) => b - a)
    .forEach((v, i) => {
      if ((i + 1) % m === 0) result += v * m;
    });

  return result;
}

// 다른풀이1
// score.slice()로 copy
function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
