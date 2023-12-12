// 문자열 내림차순으로 배치하기

// function solution(s) {
//   var answer = "";
//   let codeAt = [];

//   for (i = 0; i < s.length; i++) {
//     codeAt.push(s.charCodeAt(i));
//   }

//   const a = codeAt.sort((a, b) => b - a).join(", ");
//   console.log("a : ", a);

//   console.log(String.fromCharCode(a));
//   return answer;
// }

console.log(solution("Zbcdefg")); // "gfedcbZ"

// 다른 풀이 1
// function solution(s) {
//   // console.log(s.split('').sort().reverse().join(''))
//   return s.split("").sort().reverse().join("");
// }

// https://velog.io/@ne_ol/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C-%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0JavaScript

// 예시는 정렬이 이미 되어있어서 다른 예시로. s = "DajBziAlC"
// s.split('') -> ['D', 'a', 'j', 'B', 'z', 'i', 'A', 'l', 'C']
// s.split('').sort() -> ['A', 'B', 'C', 'D', 'a', 'i', 'j', 'l', 'z']
// s.split('').sort().reverse() -> ['z', 'l', 'j', 'i', 'a', 'D', 'C', 'B', 'A']
// s.split('').sort().reverse().join('') -> zljiaDCBA
// 알파벳은 sort()를 할 경우, 자동으로 대문자가 먼저 A부터 Z로 정렬되고, 소문자가 a->z 로 정렬된다는 것을 잘 이용했다.

// obj.sort((a, b) => (a > b ? -1 : 1)
// obj.sort((a, b) => b.localeCompare(a))
