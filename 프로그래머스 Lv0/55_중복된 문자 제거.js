function solution(my_string) {
  return Array.from(new Set(my_string)).join("");
}

// 다른풀이1
// 스프레드 연산자로 가능
function solution(my_string) {
  return [...new Set(my_string)].join("");
}
