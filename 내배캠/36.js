// 문자열 다루기 기본

function solution(s) {
  let answer = false;
  if ((s.length === 4) & !!parseInt(s)) {
    answer = true;
  } else if ((s.length === 6) & !!parseInt(s)) {
    answer = true;
  }
  return answer;
}

// 다른 풀이 1
