function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);

  // abs : 절대값 반환

  // 추가)
  // at : 정수 값을 받은 후, 배열에서 해당 값에 해당 인덱스의 요소를 반환
  // 마지막 값을 얻기 : array[array.length - 1]을 하는 대신, 짧게 array.at(-1)을 사용할 수 있다.

  const sideA = Math.abs(dots[0][0] - dots[2][0]);
  const sideB = Math.abs(dots[0][1] - dots[1][1]);

  return sideA * sideB;
}
