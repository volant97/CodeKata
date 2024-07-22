function solution(num_str) {
  let result = 0;
  num_str.split("").forEach((i) => (result += Number(i)));
  return result;
}

// 다른풀이1
// reduce
function solution(num_str) {
  return [...num_str].reduce((a, c) => a + +c, 0);
}

// 다른풀이2
// reduce
function solution(num_str) {
  let result = 0;

  result = num_str.split("").reduce((acc, cur) => acc + Number(cur), 0);

  return result;
}
