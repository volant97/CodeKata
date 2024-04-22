function solution(cipher, code) {
  const arr = [];
  for (let i = code - 1; i < cipher.length; i += code) {
    arr.push(cipher[i]);
  }
  return arr.join("");
}

// 다른풀이1
// % 활용
function solution(cipher, code) {
  var answer = "";

  for (let i = 1; i <= cipher.length; i++) {
    if (i % code === 0) answer = answer + cipher[i - 1];
  }

  return answer;
}

// 다른풀이2
// filter 활용
function solution(cipher, code) {
  return cipher
    .split("")
    .filter((v, i) => (i + 1) % code === 0)
    .join("");
}
