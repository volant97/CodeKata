function solution(n) {
  let answer = 0;
  const arr = n.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    answer += Number(arr[i]);
  }

  return answer;
}

// 다른풀이1
function solution(n) {
  var answer = 0;
  var m = String(n);

  for (let i = 0; i < m.length; i++) {
    answer += parseInt(m[i]);
  }
  return answer;
}

// 다른풀이2
function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => acc + cur * 1, 0);
}
