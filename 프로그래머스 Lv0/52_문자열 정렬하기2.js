function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}

// 다른풀이1
function solution(s) {
  return [...s.toLowerCase()].sort().join("");
}
