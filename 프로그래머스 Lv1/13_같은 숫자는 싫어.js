function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 다른풀이1
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
