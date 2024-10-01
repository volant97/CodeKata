function solution(str1, str2) {
  let result = "";
  const arr1 = [...str1];
  arr1.forEach((v, i) => {
    result += v;
    result += [...str2][i];
  });
  return result;
}

// 다른풀이1
function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("");
}
