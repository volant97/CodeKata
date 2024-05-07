function solution(num_list) {
  let answer = [0, 0];

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      answer[0]++;
    } else {
      answer[1]++;
    }
  }

  return answer;
}

// 다른풀이1
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
