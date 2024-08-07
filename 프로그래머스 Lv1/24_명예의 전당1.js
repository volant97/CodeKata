function solution(k, score) {
  let ranking = [];
  const result = [];

  for (let i = 1; i <= score.length; i++) {
    ranking = score
      .slice(0, i)
      .sort((a, b) => b - a)
      .slice(0, k);
    result.push(Math.min(...ranking));
  }

  return result;
}
