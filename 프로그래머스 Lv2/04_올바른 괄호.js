// 다음에 다시 풀어보기
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === "(" && s[i] === ")") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length;
}

// 다른풀이1
function solution(s) {
  let stack = 0;
  for (const char of s) {
    if (char === "(") {
      stack++;
    } else {
      stack--;
    }
    if (stack < 0) {
      return false;
    }
  }
  return !stack;
}

// 1. 정답은 맞지만 시간 초과
function solution(s) {
  let text = s.split("()").join("");

  for (let i = 0; i < i + 1; i++) {
    if (text.includes("()")) {
      text = text.split("()").join("");
    } else {
      break;
    }
  }

  return text === "" ? true : false;
}

// 2. 정답은 맞지만 시간 초과
function solution(s) {
  let text = s;
  let result = true;

  for (let i = 0; i < s.length; i++) {
    if (text.startsWith(")")) {
      result = false;
      break;
    } else if (text.endsWith("(")) {
      result = false;
      break;
    } else if (text.includes("((()))")) {
      text = text.replaceAll("((()))", "");
    } else if (text.includes("(())")) {
      text = text.replaceAll("(())", "");
    } else if (text.includes("()")) {
      text = text.replaceAll("()", "");
    } else if (text === "") {
      break;
    }
  }

  return result;
}

// 배열로 접근하면 시간 초과됨
