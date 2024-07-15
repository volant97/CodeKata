// slice
function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(5);
}

// 다른풀이1
// splice
function solution(num_list) {
  return num_list.sort((a, b) => a - b).splice(5);
}
