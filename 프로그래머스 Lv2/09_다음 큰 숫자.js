function solution(n) {
  let result = 0;

  for (let i = n + 1; i < i + 1; i++) {
    if (n.toString(2).split("1").length === i.toString(2).split("1").length) {
      result = i;
      break;
    }
  }

  return result;
}

// 다른풀이1
// match
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

// 다른풀이2
// 시간 복잡도 낮음
/* 개인 저장용
 ** 알고리즘 시간 복잡도 O(log n) 이지만 사실상 O(a)에 가까움.
 ** 655395 입력후 1억번 실행에 소요 시간450ms 미만 */
function solution(n) {
  var i, j;
  for (i = 0; !(n & 1); i++) {
    n = n >> 1;
  } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
  for (j = 0; n & 1; i++, j++) {
    n = n >> 1;
  } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
  for (j--, n++; i !== j; i--) {
    n = n << 1;
  } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
  for (i; i; i--, n++) {
    n = n << 1;
  } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
  return n;
}

// 다른풀이3
// while
function solution(n) {
  var size = n.toString(2).match(/1/g).length;
  while (n++) {
    if (size === n.toString(2).match(/1/g).length) return n;
  }
}
