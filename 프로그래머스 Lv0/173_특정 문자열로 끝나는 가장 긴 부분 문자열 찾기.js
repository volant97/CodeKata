function solution(myString, pat) {
  const arr = [...myString];
  const index = myString.lastIndexOf(pat);
  arr.splice(index + pat.length);
  return arr.join("");
}

// 개선
function solution(myString, pat) {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}

// 다른풀이1
const solution = (str, pat) => str.substring(0, str.lastIndexOf(pat)) + pat;

// 다른풀이2
const solution = (m, p) => m.slice(0, m.lastIndexOf(p) + p.length);
