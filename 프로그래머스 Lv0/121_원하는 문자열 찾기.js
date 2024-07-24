function solution(myString, pat) {
  const str = myString.toLowerCase();
  return str.includes(pat.toLowerCase()) ? 1 : 0;
}

// 다른풀이1
// +만 붙이면 true는 1, false는 0
const solution = (s, p) => +s.toLowerCase().includes(p.toLowerCase());
