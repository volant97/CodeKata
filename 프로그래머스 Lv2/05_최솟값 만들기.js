function solution(A, B) {
  const maxA = Math.max(...A);
  const maxB = Math.max(...B);

  if (maxA >= maxB) {
    A.sort((a, b) => b - a);
    B.sort((a, b) => a - b);
  } else {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
  }

  let result = 0;
  A.forEach((v, i) => {
    result += v * B[i];
  });

  return result;
}

// 개선
// max값을 구할 필요 없음
function solution(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  let result = 0;
  A.forEach((v, i) => {
    result += v * B[i];
  });

  return result;
}

// 다른풀이1
// reduce 인자에 대해서 쉽게 이해
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
