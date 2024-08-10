// 수학적 원리
// https://school.programmers.co.kr/questions/41435
// sqrt : 루트
// pow : 제곱
function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (Math.pow(j, 2) === i) {
          cnt += 1;
        } else {
          cnt += 2;
        }
      }
    }
    if (cnt <= limit) {
      answer += cnt;
    } else {
      answer += power;
    }
  }
  return answer;
}

// 위의 풀이 간략하게
function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        cnt += Math.pow(j, 2) === i ? 1 : 2;
      }
    }
    answer += cnt <= limit ? cnt : power;
  }

  return answer;
}

// 시간초과
function solution(number, limit, power) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
      if (count > limit) {
        count = power;
        break;
      }
    }
    result += count;
  }

  return result;
}
