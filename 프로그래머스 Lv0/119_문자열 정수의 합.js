function solution(num_str) {
  let result = 0;
  num_str.split("").forEach((i) => (result += Number(i)));
  return result;
}
