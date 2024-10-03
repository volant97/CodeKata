function solution(arr, flag) {
  let result = [];

  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        result.push(arr[i]);
      }
    } else {
      for (let j = 0; j < arr[i]; j++) {
        result.pop();
      }
    }
  }

  return result;
}

// 다른풀이1
// reduce
// new Array fill
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) =>
      flag[i]
        ? [...prev, ...new Array(num * 2).fill(num)]
        : prev.slice(0, -num),
    []
  );
}
