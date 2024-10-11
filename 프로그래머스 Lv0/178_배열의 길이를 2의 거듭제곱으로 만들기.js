function solution(arr) {
  let arrLength = arr.length;

  for (let i = 0; i < i + 1; i++) {
    if (arrLength <= 2 ** i) {
      arrLength = 2 ** i;
      break;
    }
  }

  return new Array(arrLength).fill(0).map((v, i) => arr[i] ?? v);
}

// 개선
// while
function solution(arr) {
  let arrLength = arr.length;

  let num = 0;
  while (arrLength > 2 ** num) num++;
  arrLength = 2 ** num;

  return new Array(arrLength).fill(0).map((v, i) => arr[i] ?? v);
}

// 다른풀이1
function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...new Array(totalLength - length).fill(0)];
}

// 다른풀이2
const solution = (arr) => {
  let num = 1;
  while (arr.length > num) {
    num *= 2;
  }
  while (arr.length !== num) {
    arr.push(0);
  }
  return arr;
};
