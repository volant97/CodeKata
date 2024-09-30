function solution(a, d, included) {
  const arr = [a];
  let result = 0;

  for (let i = 1; i < included.length; i++) {
    arr.push(arr[i - 1] + d);
  }

  for (let i = 0; i < included.length; i++) {
    if (included[i]) result += arr[i];
  }

  return result;
}

// 다른풀이1
// reduce
function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}
