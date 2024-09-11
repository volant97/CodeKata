function solution(arr, idx) {
  const sliceArr = arr.slice(idx);
  let result = -1;

  for (let i = 0; i < sliceArr.length; i++) {
    if (sliceArr[i] === 1) {
      result += i + idx + 1;
      break;
    }
  }

  return result;
}

// 다른풀이1
const solution = (a, i) => a.indexOf(1, i);
