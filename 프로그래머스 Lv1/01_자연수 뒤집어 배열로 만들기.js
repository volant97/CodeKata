function solution(n) {
  const answer = String(n)
    .split("")
    .reverse()
    .map((i) => parseInt(i));
  return answer;
}

// 다른풀이1
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((n) => parseInt(n));
}
