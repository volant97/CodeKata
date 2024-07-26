function solution(num_list, n) {
  return num_list.filter((v, i) => i % n === 0);
}

// 다른풀이1
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n));
