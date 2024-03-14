// K번째수

function solution(array, commands) {
  let answer = [];

  for (i = 0; i < commands.length; i++) {
    const sortArr = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    answer.push(sortArr[commands[i][2] - 1]);
  }

  return answer;
}

// 그냥 sort() 입력 시 테스트2번에서 오류
