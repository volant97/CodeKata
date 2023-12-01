// 콜라츠 추측

function solution(num) {
  for (let i = 0; i < 500; i++) {
    if (num != 1) {
      num = num % 2 == 0 ? num / 2 : num * 3 + 1;
    } else {
      return (answer = i);
    }
  }
  return (answer = -1);
}

console.log("solution : ", solution(6)); // 8
console.log("solution : ", solution(16)); // 4
console.log("solution : ", solution(626331)); // -1

// 다른 풀이 1
// function collatz(num) {

//   for(var answer = 0;answer<500;answer++){
//     if(num%2==0){
//       num = num/2;
//     }
//     else if(num==1){
//         return answer;
//     }
//     else if(num%2==1){
//       num = (num*3)+1;
//     }
//   }
//   //if(answer == 500){return -1;}
//     return -1;
// }

// 다른 풀이 2 - while
// function collatz(num) {
//   let answer = 0;
//   while(num != 1 && answer != 500) {
//       num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
//       answer++;
//   }
//   return num == 1 ? answer : -1;
// }
