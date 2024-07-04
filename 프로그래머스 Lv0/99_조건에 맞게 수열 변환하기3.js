function solution(arr, k) {
  const result = arr.map((i) => {
    if (k % 2 === 0) {
      return i + k;
    } else {
      return i * k;
    }
  });

  return result;
}

// 다른풀이
// map 인자 : v를 많이 사용함 or item
const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));
