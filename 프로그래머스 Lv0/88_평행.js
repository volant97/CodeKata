// 1, 10번 테스트케이스 오류
// 다시 풀기
function solution(dots) {
  if (Math.abs(dots[0][0] - dots[1][0]) === Math.abs(dots[2][0] - dots[3][0])) {
    if (
      Math.abs(dots[0][1] - dots[1][1]) === Math.abs(dots[2][1] - dots[3][1])
    ) {
      return 1;
    }
  }

  if (Math.abs(dots[0][0] - dots[2][0]) === Math.abs(dots[1][0] - dots[3][0])) {
    if (
      Math.abs(dots[0][1] - dots[2][1]) === Math.abs(dots[1][1] - dots[3][1])
    ) {
      return 1;
    }
  }

  if (Math.abs(dots[0][0] - dots[3][0]) === Math.abs(dots[1][0] - dots[2][0])) {
    if (
      Math.abs(dots[0][1] - dots[3][1]) === Math.abs(dots[1][1] - dots[2][1])
    ) {
      return 1;
    }
  }
  return 0;
}
