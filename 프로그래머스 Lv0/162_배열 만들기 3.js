function solution(arr, intervals) {
  const result = [];

  intervals.forEach((v) => {
    result.push(...arr.slice(v[0], v[1] + 1));
  });

  return result;
}

// 다른풀이1
function solution(arr, intervals) {
  const [[a, b], [c, d]] = intervals;

  return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}
