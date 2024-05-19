// 재귀함수
function solution(balls, share) {
  const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };

  const n = factorial(balls);
  const m = factorial(share);
  const nm = factorial(balls - share);

  return Math.round(n / (nm * m));
}

// 다른풀이1
// 재귀함수 다른 방법
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

function solution(balls, share) {
  return Math.round(
    팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share)
  );
}
