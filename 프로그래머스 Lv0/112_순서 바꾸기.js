// 배열 합치기
// 1. concat
// 2. spread operator
function solution(num_list, n) {
  const start = num_list.slice(n);
  const end = num_list.slice(0, n);

  return start.concat(end);
  // return [...start, ...end]
}

// 다른풀이1
// splice
// spread operator + push
function solution(num_list, n) {
  num_list.push(...num_list.splice(0, n));
  return num_list;
}

// 다른풀이2
// splice
// spread operator + unshift
function solution(num_list, n) {
  num_list.unshift(...num_list.splice(n));
  return num_list;
}
