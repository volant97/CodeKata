// 정수 제곱근 판별

function solution(n) {
  let answer = 0;
  for (x = 1; x <= n; x++) {
    if (x ** 2 === n) {
      return (answer = (x + 1) ** 2);
    } else {
      answer = -1;
    }
  }
  return answer;
}

console.log("solution : ", solution(121)); // 144
console.log("solution : ", solution(3)); // -1

// 다른 풀이
// function nextSqaure(n){
//   var result = 0;
//   //함수를 완성하세요
//     var k = Math.sqrt(n);

//   if(k%1 == 0){
//     result = (k+1)*(k+1);
//   }else{
//     result = "no";
//   }

//   return result;
// }

// 의견
// k%1 == 0 이 문장으로도 정수판별이 가능했군요
