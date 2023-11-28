// 정수 내림차순으로 배치하기

function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log("solution : ", solution(118372)); // 873211
