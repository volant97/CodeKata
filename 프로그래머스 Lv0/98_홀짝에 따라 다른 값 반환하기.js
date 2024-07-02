function solution(n) {
  let result = 0;

  if (n % 2 === 0) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) result += i ** 2;
    }
  } else {
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) result += i;
    }
  }

  return result;
}

// 다른풀이1
// n이 짝수일 때는 등차수열의 합 공식을 적용하였고,
// n이 홀수일 때는 자연수 거듭 제곱의 합을 구하는 공식을 적용한 것으로 보입니다.
// 반복문과 조건문을 활용하지 않는 멋진 풀이네요.
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}
