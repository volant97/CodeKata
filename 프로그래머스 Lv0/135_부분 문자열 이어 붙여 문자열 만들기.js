function solution(my_strings, parts) {
  const result = [];

  my_strings.forEach((v, i) => {
    const word = v.slice(parts[i][0], parts[i][1] + 1);
    result.push(word);
  });

  return result.join("");
}

// 다른풀이1
// map의 요소인 콜백함수에 첫번째 인자를 구조분해할당
function solution(my_strings, parts) {
  return parts
    .map(([s, e], i) => {
      return my_strings[i].slice(s, e + 1);
    })
    .join("");
}

// 다른풀이2
// reduce
function solution(my_strings, parts) {
  return my_strings.reduce((result, str, i) => {
    const [s, e] = parts[i];
    return result + str.substring(s, e + 1);
  }, "");
}

// 다른풀이3
// parts를 기준으로 forEach
// 구조분해할당
function solution(my_strings, parts) {
  var answer = "";
  parts.forEach(([a, b], i) => {
    answer += my_strings[i].substring(a, b + 1);
  });
  return answer;
}
