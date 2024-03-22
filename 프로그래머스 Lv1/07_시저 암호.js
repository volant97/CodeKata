const solution = (s, n) => {
  let answer = "";
  for (let i in s) {
    if (s[i] === " ") {
      answer += " ";
    }
    let code = s.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      if (code + n > 90) {
        answer += String.fromCharCode(code + n - 26);
      } else {
        answer += String.fromCharCode(code + n);
      }
    }
    if (code >= 97 && code <= 122) {
      if (code + n > 122) {
        answer += String.fromCharCode(code + n - 26);
      } else {
        answer += String.fromCharCode(code + n);
      }
    }
  }
  return answer;
};
