function solution(score) {
  let pre = 0;
  let continual = 0;
  let ranking = 0;
  const result = [];

  const average = score.map((item, index) => {
    return (item = [(item[0] + item[1]) / 2, index]);
  });
  average.sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < average.length; i++) {
    if (pre === average[i][0]) {
      result[average[i][1]] = ranking;
      continual++;
    } else {
      ranking += continual + 1;
      result[average[i][1]] = ranking;
      continual = 0;
    }
    pre = average[i][0];
  }

  return result;
}

// 다른풀이1
// 파이프라인 안에 파이프라인 넣기
//  자기보다 점수가 높은 사람 수 + 1
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

// 다른풀이2
// 처음 구상한 indexOf 활용 방법
function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}
