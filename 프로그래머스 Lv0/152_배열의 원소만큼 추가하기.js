// 반례 두 자릿수 숫자
function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      result.push(arr[i]);
    }
  }

  return result;
}

// 다른풀이1
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

// 다른풀이2
const solution = (a) => a.map((v) => Array(v).fill(v)).flat();
