function solution(order) {
  const arr = order.toString();
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "3" || arr[i] === "6" || arr[i] === "9") {
      result += 1;
    }
  }

  return result;
}

// 다른풀이1
// 정규식
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}

// 다른풀이2
// 정규식 + split
function solution(order) {
  return ("" + order).split(/[369]/).length - 1;
}

// 다른풀이3
// filter
function solution(order) {
  return order
    .toString()
    .split("")
    .filter((v) => v === "3" || v === "6" || v === "9").length;
}
