function solution(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = i % 2 !== 0 ? strArr[i].toUpperCase() : strArr[i].toLowerCase();
  }

  return strArr;
}

// 다른풀이1
// map
function solution(strArr) {
  return strArr.map((v, i) =>
    i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()
  );
}
