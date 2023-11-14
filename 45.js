// 시저 암호

const solution = (s, n) => {
  let answer = '';
  for(let i in s){
    if(s[i] === " "){
      answer += " ";
    }
    let code = s.charCodeAt(i);
    if(code >= 65 && code <= 90){
      if(code + n > 90){
        answer += String.fromCharCode(code + n - 26)
      } else {
        answer += String.fromCharCode(code + n)
      }
    }
    if(code >= 97 && code <= 122){
      if(code + n > 122){
        answer += String.fromCharCode(code + n - 26)
      } else {
        answer += String.fromCharCode(code + n)
      }
    }
  }
  return answer;
 }

console.log(solution("AB", 1));  // "BC"
console.log(solution("z", 1));  // "a"
console.log(solution("a B z", 4));  // "e F d"

// 아스키코드
// charCodeAt

// 유니코드
// fromCharCode



// 다른 풀이 1 : split, join
// (separator="") 글자별로 잘라서 배열에 담기
// (separator=",") 특정 구분자로 잘라서 배열에 담기

// function solution(s, n) {
//     var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
//     return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
// }
// (separator=" ") 단어별로 잘라서 배열에 담기 



// 다른 풀이 2
// function solution(s, n) {
//   var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var lower = "abcdefghijklmnopqrstuvwxyz";
//   var answer= '';

//   for(var i =0; i <s.length; i++){
//       var text = s[i];
//       if(text == ' ') {
//           answer += ' '; 
//           continue;
//       }
//       var textArr = upper.includes(text) ? upper : lower;
//       var index = textArr.indexOf(text)+n;
//       if(index >= textArr.length) index -= textArr.length;
//       answer += textArr[index];
//   }
//   return answer;
// }


