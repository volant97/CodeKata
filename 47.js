// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

// -------------------------------------------------

// sort()

// 오름차순, ASCII 문자 순서로 정렬시키는 함수

// 첫 번째 인수가 두 번째 인수보다 작을 경우 - 값 => 첫 번째 인수가 두 번째 인수 앞에 오도록 정렬
// 두 인수가 같을 경우 0
// 첫 번째 인수가 두 번째 인수보다 클 경우 + 값 => 두 번째 인수가 첫 번째 인수 앞에 오도록 정렬

// -------------------------------------------------

// localCompare()

// 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴

// "a"는 "c"의 앞에 오기 때문에 음수 값을 리턴
// 'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

//알파벳 순으로 "check"는 "against"의 뒤에 오기 때문에 양수 값을 리턴
// 'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a"는 "a"와 같기 때문에 0
// 'a'.localeCompare('a'); // 0

// -------------------------------------------------

// 풀이 실패한 코드
// function solution(strings, n) {
//   let answer = [];
//   let sp = []
//   for(i=0; i<strings.length; i++){
//       for(j=0; j<strings[i].length; j++){
//           if(strings[i][j]===strings[i][n]){
//               sp.push(strings[i][j])
//               sp.sort()
//           }
//       }
//   }
//   console.log(sp)
//   for(k=0; k<strings.length; k++){
//       for(q=0; q<sp.length; q++)
//       if(strings[k][n]===sp[q]){
//           console.log(strings[k][n])
//           answer.push(strings[k][n])
//       }
//   }
//   return answer;
// }

// -------------------------------------------------

// 내가 실패한 코드를 성공적으로 작성한 풀이법

// function solution(strings, n) {
//   var answer = [];
//   for (var i = 0; i < strings.length; i++) {
//       var chu = strings[i][n];
//       strings[i] = chu + strings[i];
//   }
//   strings.sort();
//   for (var j = 0; j < strings.length; j++) {
//       strings[j] = strings[j].replace(strings[j][0],"");
//       answer.push(strings[j])
//   }

//   return answer;
// }
