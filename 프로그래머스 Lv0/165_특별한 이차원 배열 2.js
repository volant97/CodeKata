function solution(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === arr[j][i]) result++;
    }
  }

  return result === arr.length * arr[0].length ? 1 : 0;
}

// 다른풀이1
// every
function solution(arr) {
  return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i]))
    ? 1
    : 0;
}
