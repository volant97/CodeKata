// slice
function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}

// 구조분해할당
function solution(num_list) {
  num_list.sort((a, b) => a - b);
  let [a, b, c, d, e] = num_list;
  return [a, b, c, d, e];
}

// 내가 줄여봄
function solution(num_list) {
  const [a, b, c, d, e] = num_list.sort((a, b) => a - b);
  return [a, b, c, d, e];
}
