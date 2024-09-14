function solution(num_list) {
  let result = 0;

  for (let i = 0; i < num_list.length; i++) {
    let num = num_list[i];
    for (let j = 0; j < j + 1; j++) {
      if (num === 1) break;
      if (num % 2 === 0) {
        result++;
        num = num / 2;
      } else {
        result++;
        num = (num - 1) / 2;
      }
    }
  }

  return result;
}

// 다른풀이1
// 이게 이진법이랑 관련이 있구나
function solution(num_list) {
  return num_list.map((v) => v.toString(2).length - 1).reduce((a, c) => a + c);
}
