function solution(my_string) {
  const arr = my_string.split("");
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      result += Number(arr[i]);
    }
  }
  return result;
}

// 다른풀이1
// 정규식
function solution(my_string) {
  const answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}
