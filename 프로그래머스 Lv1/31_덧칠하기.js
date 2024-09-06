// 정답은 나오지만 시간이 너무 오래걸린다.
function solution(n, m, section) {
  let result = 0;
  const arr = new Array(n)
    .fill()
    .map((_, i) => (section.includes(i + 1) ? 0 : 1));

  arr.forEach((v, i) => {
    if (v === 0) {
      for (let j = 0; j < m; j++) {
        arr[i + j] = 1;
      }
      result++;
    }
  });

  return result;
}

// 다른풀이1
function solution(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (var section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}
