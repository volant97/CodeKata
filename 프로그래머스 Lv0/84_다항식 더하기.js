// 1. 경우의 수 6가지
// 2. 두자리 수의 경우 고려
// 3. 숫자만 출력될 경우... 문자로 변환
function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const sum = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("x")) {
      const num = arr[i].split("x");
      if (num[0] === "") {
        sum[0]++;
      } else {
        sum[0] += Number(num[0]);
      }
    } else {
      sum[1] += Number(arr[i]);
    }
  }

  if (sum[0] === 0) {
    if (sum[1] === 0) return "";
    if (sum[1] !== 0) return sum[1].toString();
  } else if (sum[0] === 1) {
    if (sum[1] === 0) return "x";
    if (sum[1] !== 0) return "x + " + sum[1];
  } else if (sum[0] > 1) {
    if (sum[1] === 0) return sum[0] + "x";
    if (sum[1] !== 0) return sum[0] + "x + " + sum[1];
  }
}
