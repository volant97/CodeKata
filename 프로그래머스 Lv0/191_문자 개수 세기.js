function solution(my_string) {
  const result = new Array(52).fill(0);
  const arr = my_string.split("");

  arr.forEach((v) => {
    const code = v.charCodeAt();
    if (code <= 90) {
      // 대문자
      result[code - 65]++;
    } else {
      // 소문자
      result[code - 97 + 26]++;
    }
  });

  return result;
}

// 다른풀이1
function solution(m) {
  var answer = [];
  let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let a = [];
  a.length = 52;
  a.fill(0);

  m.split("").map((n) => {
    a[al.indexOf(n)] += 1;
  });

  return a;
}

// 다른풀이2
function solution(my_string) {
  let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var answer = new Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    answer[alp.indexOf(my_string[i])]++;
  }
  return answer;
}
