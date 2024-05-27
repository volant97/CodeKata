// JS 2,4,5,9,10 테스트 케이스 오류
// 수정 필요
function solution(s) {
  const arr = s.split("").sort();
  const resultArr = [];
  const blackList = [];

  for (let i = 0; i < arr.length; i++) {
    if (resultArr.indexOf(arr[i]) === -1 && blackList.indexOf(arr[i]) === -1) {
      resultArr.push(arr[i]);
    } else {
      resultArr.splice(resultArr.indexOf(arr[i]), 1);
      blackList.push(arr[i]);
    }
  }

  return resultArr.join("");
}

// 다른풀이1
// 첫번째 index와 마지막 index의 일치여부 판단후 push
function solution(s) {
  let ans = [];

  let sArr = s.split("");

  sArr.forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      ans.push(item);
    }
  });

  return ans.sort().join("");
}
