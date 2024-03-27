// continue
function solution(s) {
  let stack = [];
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      answer.push(-1);
      stack.push(s[i]);
      continue;
    } else {
      answer.push(stack.length - stack.lastIndexOf(s[i]));
      stack.push(s[i]);
      continue;
    }
  }

  return answer;
}

// 다른풀이1
// 고차 함수
function solution(s) {
  let stack = [];
  let ans = [];

  [...s].forEach((str) => {
    if (!stack.includes(str)) {
      ans.push(-1);
    }

    if (stack.includes(str)) {
      ans.push(stack.length - stack.lastIndexOf(str));
    }

    stack.push(str);
  });

  return ans;
}

// 다른풀이2
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}
