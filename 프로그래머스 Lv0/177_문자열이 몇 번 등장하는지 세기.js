function solution(myString, pat) {
  let result = 0;

  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, pat.length + i) === pat) result++;
  }

  return result;
}

// 다른풀이1
// 정규식
function solution(myString, pat) {
  const reg = new RegExp(`(?=${pat})`, "g");
  return myString.match(reg)?.length || 0;
}

// 다른풀이2
const solution = (s, p) =>
  Array(s.length - p.length + 1)
    .fill("")
    .map((v, i) => s.slice(i, i + p.length))
    .filter((v) => v == p).length;
