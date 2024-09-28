function solution(my_string, m, c) {
  let result = "";

  for (let i = c - 1; i < my_string.length; i += m) {
    result += my_string[i];
  }

  return result;
}

// 다른풀이1
function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}

// 일부 테스트 케이스에서 불합
function solution(my_string, m, c) {
  const stringArr = [...my_string];
  const arr = [];
  const result = [];
  for (let i = 0; i < my_string.length / m; i++) {
    arr.push(stringArr.splice(0, m));
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j === c - 1) result.push(arr[i][j]);
    }
  }
  console.log(arr);
  return result.join("");
}
