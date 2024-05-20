function solution(num_list, n) {
  const result = [];
  let arr = [];

  for (let i = 0; i < num_list.length; i++) {
    arr.push(num_list[i]);
    if ((i + 1) % n === 0) {
      result.push(arr);
      arr = [];
    }
  }

  return result;
}

// 다른풀이1
// splice한 배열을 넣기
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

// 다른풀이2
function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}

// 다른풀이3
function solution(num_list, n) {
  var answer = [];

  for (let i = 0; i < num_list.length; i = i + n) {
    answer.push(num_list.slice(i, i + n));
  }

  return answer;
}
