// 이상한 문자 만들기

function solution(s) {
  let answer = "";
  let word = s.split(" ");
  for (i = 0; i < word.length; i++) {
    for (j = 0; j < word[i].length; j++) {
      if (j % 2 === 0) {
        answer += word[i][j].toUpperCase();
      } else {
        answer += word[i][j].toLowerCase();
      }
    }
    if (i < word.length - 1) {
      answer += " ";
    }
  }
  return answer;
}

// 다른 풀이 1 - 정규식
// function toWeirdCase(s) {
//   return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
//     return a[0].toUpperCase() + a[1].toLowerCase();
//   });
// }
