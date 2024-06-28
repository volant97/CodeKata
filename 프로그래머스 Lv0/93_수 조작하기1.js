function solution(n, control) {
  let result = n;
  const arr = control.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "w") result += 1;
    if (arr[i] === "s") result -= 1;
    if (arr[i] === "d") result += 10;
    if (arr[i] === "a") result -= 10;
  }

  return result;
}

// 다른풀이1
// 객체 사용
function solution(n, control) {
  var answer = n;
  const o = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  control.split("").forEach((e) => (answer += o[e]));
  return answer;
}

// 다른풀이2
// 객체 + reduce
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n);
}
