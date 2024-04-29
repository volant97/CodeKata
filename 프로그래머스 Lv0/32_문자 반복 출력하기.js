function solution(my_string, n) {
  const arr = [...my_string];
  return arr.map((e) => e.repeat(n)).join("");
}

// 개선 (한줄)
function solution(my_string, n) {
  return [...my_string].map((e) => e.repeat(n)).join("");
}

// 다른풀이1
// for of
function solution(my_string, n) {
  let ans = "";
  for (let s of my_string) ans += s.repeat(n);
  return ans;
}
