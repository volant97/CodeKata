function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}

// 다른풀이1
// +string 해주면 데이터 타입이 number로 바뀜
// startsWith
function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}
