function solution(array, n) {
  const result = array.filter((i) => i === n);
  return result.length;
}

// 다른풀이1
// 한줄로도 가능
function solution(array, n) {
  return array.filter((i) => i === n).length;
}
