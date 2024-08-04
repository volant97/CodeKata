function solution(my_string, n) {
  return my_string.slice(my_string.length - n);
}

// 다른풀이1
function solution(my_string, n) {
  return my_string.slice(-n);
}
