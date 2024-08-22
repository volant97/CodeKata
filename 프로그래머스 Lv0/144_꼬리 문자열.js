function solution(str_list, ex) {
  const result = [];

  str_list.forEach((v) => {
    if (!v.includes(ex)) {
      result.push(v);
    }
  });

  return result.join("");
}

// 다른풀이1
// filter
const solution = (str_list, ex) =>
  str_list.filter((v) => !v.includes(ex)).join("");

// 다른풀이2
// reduce
const solution = (strs, ex) =>
  strs.reduce((acc, cur) => acc + (cur.includes(ex) ? "" : cur), "");

// 테스트 케이스 실패
// 기본 케이스는 다 맞는데 왜지?
// 꼬리 문자열이라길래 해당 문자로 끝나는 것을 제외한다고 이해했음...
// 그냥 해당 문자를 포함한건 다 제외하면 됨
function solution(str_list, ex) {
  const result = [];

  str_list.forEach((v) => {
    if (!v.endsWith(ex)) {
      result.push(v);
    }
  });

  return result.join("");
}
