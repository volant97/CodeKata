// 음양 더하기

function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      answer = answer + absolutes[i];
    } else if (signs[i] === false) {
      answer = answer - absolutes[i];
    }
  }

  return answer;
}

// 다른 풀이 1
// function solution(absolutes, signs) {
//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }
