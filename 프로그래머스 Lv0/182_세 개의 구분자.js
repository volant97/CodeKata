// split에 여러 조건 넣기
// split 여러개 여러 기준으로
function solution(myStr) {
  const arr = myStr.split(/a|b|c/).filter((v) => v);
  return arr.length !== 0 ? arr : ["EMPTY"];
}

// 다른풀이1
const solution = (s) => s.match(/[^a-c]+/g) || ["EMPTY"];

// 다른풀이2
function solution(myStr) {
  const list = myStr.split(/[a|b|c]/).filter((str) => str);
  return list.length ? list : ["EMPTY"];
}

// 다른풀이3
function solution(myStr) {
  const tmp1 = myStr.split("a").join("b");
  const tmp2 = tmp1.split("b").join("c");
  const tmp3 = tmp2.split("c").filter((x) => x);
  if (tmp3.length === 0) return ["EMPTY"];
  return tmp3;
}
