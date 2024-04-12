function solution(num_list) {
  const result = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    result.push(num_list[i]);
  }
  return result;
}

// 다른풀이1
function solution(num_list) {
  return num_list.reverse();
}

// 다른풀이2
function solution(num_list) {
  return num_list.sort((a, b) => -1);
}

// 다른풀이3
// num_list.pop() 사용
