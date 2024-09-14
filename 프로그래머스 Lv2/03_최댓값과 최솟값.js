function solution(s) {
  const arr = s.split(" ");
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return `${min} ${max}`;
}

// 다른풀이1
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
