function solution(my_string) {
  return my_string.split("").reverse().join("");
}

// 다른풀이1
// 스프레드
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}
