function solution(start_num, end_num) {
  const result = [];

  for (let i = start_num; i >= end_num; i--) {
    result.push(i);
  }

  return result;
}

// 다른풀이1
// Array, fill, map
const solution = (start, end) =>
  Array(start - end + 1)
    .fill(start)
    .map((v, i) => v - i);
