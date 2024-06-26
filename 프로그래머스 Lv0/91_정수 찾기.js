function solution(num_list, n) {
  const result = num_list.filter((i) => i === n);
  return result.length > 0 ? 1 : 0;
}

// 다른풀이1
const solution = (l, n) => +l.includes(n);

// 다른풀이2
const solution = (num_list, n) => {
  if (num_list.includes(n)) return 1;
  return 0;
};
