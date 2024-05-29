function solution(my_str, n) {
  const arr = my_str.split("");
  const length = Math.ceil(arr.length / n);
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(arr.splice(0, n).join(""));
  }

  return result;
}

// 다른풀이1
// 정규표현식
// `.{1, ${n}}`, "g" -> . : 모든 문자열 탐색, {a, b}: a개 이상 b개 이하씩 탐색(a개 이상인 이유는 마지막에 n개보다 작게 나오는 경우 커버 위함, "g": 전역 탐색
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}

// 다른풀이2
// slice
function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));
  return res;
}
