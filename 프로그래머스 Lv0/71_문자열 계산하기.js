function solution(my_string) {
  const arr = my_string.split(" ");
  let oper = "";
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "+" && arr[i] !== "-") {
      if (oper === "") {
        result += Number(arr[i]);
      }
      if (oper === "+") {
        result += Number(arr[i]);
        oper = "";
      }
      if (oper === "-") {
        result -= Number(arr[i]);
        oper = "";
      }
    } else {
      if (arr[i] === "+") {
        oper = "+";
      }
      if (arr[i] === "-") {
        oper = "-";
      }
    }
  }

  return result;
}

// 개선한 코드
function solution(my_string) {
  const arr = my_string.split(" ");
  let sign = 1;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      sign = 1;
    } else if (arr[i] === "-") {
      sign = -1;
    } else {
      result += arr[i] * sign;
    }
  }

  return result;
}

// 다른풀이1
function solution(my_string) {
  const stack = [];

  let sign = 1;
  for (const ch of my_string.split(" ")) {
    if (ch === "+") {
      sign = 1;
    } else if (ch === "-") {
      sign = -1;
    } else {
      stack.push(ch * sign);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

// 다른풀이2
// 보안 이슈 존재 : eval()을 사용하면 해커가 위험한 코드를 사용할 수 있습니다.
// var solution = eval
