function solution(start_num, end_num) {
  const result = [];
  for (let i = start_num; i <= end_num; i++) result.push(i);
  return result;
}

// 다른풀이1
// Array, fill, map
function solution(start, end) {
  return Array(end - start + 1)
    .fill(start)
    .map((x, idx) => x + idx);
}
