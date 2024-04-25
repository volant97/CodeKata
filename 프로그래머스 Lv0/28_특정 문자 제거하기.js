// map
function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((i) => i !== letter)
    .join("");
}

// 다른풀이1
// split의 인자로 처리
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}

// 다른풀이2
// replaceAll
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

// 다른풀이3
// 정규식
function solution(my_string, letter) {
  let reg = new RegExp(letter, "g");
  return my_string.replace(reg, "");
}
