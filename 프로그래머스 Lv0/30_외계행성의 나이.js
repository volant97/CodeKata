function solution(age) {
  const alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const ageArr = [...age.toString()];
  result = "";

  for (let i = 0; i < ageArr.length; i++) {
    result += alphabetArr[ageArr[i]];
  }

  return result;
}

// 개선
// 문자열 자체도 인덱스[] 접근 가능
function solution(age) {
  const alphabetArr = "abcdefghij";
  const ageArr = age.toString();
  result = "";

  for (let i = 0; i < ageArr.length; i++) {
    result += alphabetArr[ageArr[i]];
  }

  return result;
}

// 다른풀이1
// 문자열 자체도 인덱스[] 접근 가능
// map
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
