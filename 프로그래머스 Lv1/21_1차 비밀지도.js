// Array.from : 이중배열 생성
// padStart : 자릿수만큼 0 채우기
function solution(n, arr1, arr2) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  const arrA = arr1.map((i) => i.toString(2).padStart(n, "0").split(""));
  const arrB = arr2.map((i) => i.toString(2).padStart(n, "0").split(""));

  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < n; j++) {
      arrA[i][j] === "1" || arrB[i][j] === "1"
        ? (result[i][j] = "#")
        : (result[i][j] = " ");
    }
  }

  return result.map((i) => i.join(""));
}

// 다른풀이1
// repeat : 반복
// 정규식
// | 를 활용해서 0이 아니라면 toString(2)이 작동하도록 함
function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};

// 다른풀이2
// 정규식
var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );
