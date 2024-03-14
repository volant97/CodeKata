// 두 개 뽑아서 더하기

function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}

// 다른 풀이 1
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      }
    }
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}

// 다른 풀이 2
function solution(numbers) {
  let sums = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (!sums.includes(sum)) sums.push(sum);
    }
  }
  sums.sort((a, b) => a - b);
  return sums;
}

// 다른 풀이 3
function solution(numbers) {
  var answer = [];
  const set = new Set();
  for (let i = 0; i < numbers.length; ++i) {
    let sum = 0;
    for (let j = 0; j < numbers.length; ++j) {
      if (i != j) {
        set.add(numbers[i] + numbers[j]);
      }
    }
  }
  set.forEach((number) => {
    answer.push(number);
  });
  answer.sort((a, b) => a - b);
  return answer;
}
