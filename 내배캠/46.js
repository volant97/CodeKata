// 숫자 문자열과 영단어

function solution(s) {
  let answer = s;
  const numS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (i = 0; i < numS.length; i++) {
    let arr = answer.split(numS[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

// split는 해당 문자 기준으로 나눠서 배열로 만든다
// join은 배열안에 요소 사이에 해당 문자를 넣고 string으로 만든다.
// 따라서 위의 경우 배열안에 2개의 요소가 있고 2개 요소 사이에 join의 i가 들어가기에 원하는 위치(split 해놓은 문자와 문자 사이)에 넣게 된다.

// 시도 했던 풀이 - 실패(주어진 테스트는 성공했지만 이후 제출 테스트 실패)
// function solution(s) {
//     let answer = s;
//     const numS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

//     for(i=0; i<numS.length; i++){
//         if(s.includes(numS[i])){
//             answer = answer.replace(numS[i], i)
//         }
//     }

//     return Number(answer);
// }

// 다른 풀이 1
// function solution(s) {
//     s = s.replace(/zero/g, 0)
//     .replace(/one/g, 1)
//     .replace(/two/g, 2)
//     .replace(/three/g, 3)
//     .replace(/four/g, 4)
//     .replace(/five/g, 5)
//     .replace(/six/g, 6)
//     .replace(/seven/g, 7)
//     .replace(/eight/g, 8)
//     .replace(/nine/g, 9)
//     return parseInt(s);
// }
