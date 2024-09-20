function solution(s) {
  const result = [0, 0];

  let lengthToString = s;

  for (let i = 0; i < i + 1; i++) {
    if (lengthToString === "1") break;

    const removeZero = [...lengthToString]
      .map((v) => {
        if (v === "0") {
          result[1]++;
          return "";
        } else {
          return v;
        }
      })
      .join("");

    lengthToString = removeZero.length.toString(2);

    result[0]++;
  }

  return result;
}

// 개선 - 조금 더 줄이기
function solution(s) {
  const result = [0, 0];

  for (let i = 0; i < i + 1; i++) {
    if (s === "1") break;

    s = [...s]
      .map((v) => {
        if (v === "0") {
          result[1]++;
          return "";
        } else {
          return v;
        }
      })
      .join("")
      .length.toString(2);

    result[0]++;
  }

  return result;
}

// 다른풀이1
// while
// ||[] 이 부분이 없으면 match에서 0과 일치하는 부분이 없을 때 반환되는 값이 null이라 length 프로퍼티를 사용할 수 없기 때문에 저 부분이 꼭 필요합니당
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
