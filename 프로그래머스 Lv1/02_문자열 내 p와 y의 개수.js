function solution(s) {
  let answer = true;
  let num = 0;
  s = s.toUpperCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P") num++;
    if (s[i] === "Y") num--;
  }

  if (num !== 0) return (answer = false);

  return answer;
}

// 다른풀이1
function solution(s) {
  let result = true;

  let num = 0;

  s = s.toUpperCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P") {
      num++;
    }
    if (s[i] === "Y") {
      num--;
    }
  }

  if (num === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
