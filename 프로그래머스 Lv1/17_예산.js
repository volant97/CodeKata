// 오름차순 정렬이 중요 : 최대한 많은 result를 도출해야하기 때문에 작은 수부터 카운팅하는 것이 맞다
function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  // d.sort()로 진행하면 예외케이스에서 오류
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    answer++;
    sum += d[i];

    if (sum > budget) answer--;
  }

  return answer;
}

// 다른풀이1
// 반복할 때 마다 reduce 호출해서 검사하고 pop까지 해야돼서 효율성이 많이 떨어짐...
function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => a + b, 0) > budget) {
    d.pop();
  }

  return d.length;
}

// 다른풀이2
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
