// 44.1
function solution(num_list) {
  const result = [0, 0];

  num_list.forEach((item) => {
    if (item % 2 === 0) {
      result[0]++;
    } else {
      result[1]++;
    }
  });

  return result;
}

// 44
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
