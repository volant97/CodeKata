function solution(rsp) {
  let arr = rsp.split("");
  // let arr = [...rsp]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "2") {
      arr[i] = "0";
    } else if (arr[i] === "0") {
      arr[i] = "5";
    } else if (arr[i] === "5") {
      arr[i] = "2";
    }
  }
  return arr.join("");
}

// 다른풀이1
// 객체 사용
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
