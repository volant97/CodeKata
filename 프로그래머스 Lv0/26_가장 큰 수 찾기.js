function solution(array) {
  const max = Math.max(...array);
  const index = array.indexOf(max);
  return [max, index];
}

// 다른풀이1
// findIndex
function solution(array) {
  let max = Math.max(...array);
  return [max, array.findIndex((v) => v === max)];
}
