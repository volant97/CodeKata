function solution(numLog) {
  let result = "";
  numLog.forEach((v, i) => {
    if (v + 1 === numLog[i + 1]) result += "w";
    if (v - 1 === numLog[i + 1]) result += "s";
    if (v + 10 === numLog[i + 1]) result += "d";
    if (v - 10 === numLog[i + 1]) result += "a";
  });
  return result;
}

// 다른풀이1
function solution(numLog) {
  const convert = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  return numLog
    .slice(1)
    .map((v, i) => {
      return convert[v - numLog[i]];
    })
    .join("");
}
