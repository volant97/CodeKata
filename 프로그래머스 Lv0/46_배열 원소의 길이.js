function solution(strlist) {
  const answer = [];

  for (let i = 0; i < strlist.length; i++) {
    answer[i] = strlist[i].length;
  }

  return answer;
}

// 다른풀이
// map
function solution(strlist) {
  return strlist.map((el) => el.length);
}
