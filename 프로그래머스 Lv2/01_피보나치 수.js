// 피보나치 수 : 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

function solution(n) {
  let answer = 0;
  let f0 = 0;
  let f1 = 1;

  for (let i = 2; i <= n; i++) {
    answer = (f0 + f1) % 1234567;
    f0 = f1;
    f1 = answer;
  }

  return answer;
}

// 1234567을 나누는 이유
// 피보나치 수는 다이나믹 프로그래밍 글에서도 다뤘듯이 50번째 피보나치 수만 가더라도 그 수가 엄청나게 불어난다.
// 따라서 자바스크립트가 보장하는 정수계산을 넘어서게 되어서 제대로 된 값을 반환하지 못한다.
// 따라서 문제에서 1234567로 나누라는 의미는 "자, 이 문제는 int 자료형이 버티질 못해. 그래서 1234567로 나눠서 문제를 해결해봐!"라는 말이다.
// 그 문제 해결은 모듈러 연산의 (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C라는 성질을 이용한다.
// 계산 결과에 매번 1234567로 나눈 나머지를 반환하는 것으로 int 범위 내에 항상 값이 존재함을 보장할 수 있다.

// 다른풀이1
// 재귀함수 - 성능이 느리다
function recursiveFibonacci(n) {
  if (n <= 1) {
    return 1;
  } else {
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }
}

recursiveFibonacci(10);

// 다른풀이2
// for문 - 성능이 빠르다
function dynamicFibonacci(n) {
  var last1 = 1;
  var last2 = 1;
  var result = 0;

  for (let i = 1; i < n; i++) {
    result = last1 + last2;
    last1 = last2;
    last2 = result;
  }

  return result;
}

dynamicFibonacci(10);

// 다른풀이3
function getFibonacci(n) {
  let fNum = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fNum[i] = (fNum[i - 1] + fNum[i - 2]) % 1234567;
  }
  return fNum[n];
}

function solution(n) {
  const answer = getFibonacci(n) % 1234567;
  return answer;
}

// 다른풀이4
function solution(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
  }

  return fib[n];
}
