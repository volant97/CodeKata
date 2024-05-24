// 문자열에 자연수가 없는 경우 0을 return 해주세요. 조건 때문에 8번 케이스에서 런타임 에러.. 수정하는데 시간 소요됨
// 문자열이 없을 경우 match 하면 null을 반환함
function solution(my_string) {
  const arr = my_string.match(/\d+/g);
  let result = 0;

  if (arr !== null) {
    for (let i = 0; i < arr.length; i++) {
      result += Number(arr[i]);
    }
  }

  return result;
}

// 다른풀이1
// split, reduce
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

// 다른풀이2
// replace
function solution(my_string) {
  return my_string
    .toLowerCase()
    .replace(/[a-z]/g, " ")
    .split(" ")
    .map((v) => v * 1)
    .reduce((a, b) => a + b);
}
