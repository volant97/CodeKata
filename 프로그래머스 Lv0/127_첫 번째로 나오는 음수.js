function solution(num_list) {
  let result = -1;

  num_list.some((v, i) => {
    if (v < 0) {
      result = i;
      return true;
    }
  });

  return result;
}

// 다른풀이1
const solution = (num_list) => num_list.findIndex((v) => v < 0);
