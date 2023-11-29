// 하샤드 수

function solution(x) {
  let answer = true;
  const xArr = x.toString().split("");
  let sum = 0;

  for (i = 0; i < xArr.length; i++) {
    sum += Number(xArr[i]);
  }

  return (answer = x % sum === 0 ? true : false);
}

console.log("solution : ", solution(10)); // true
console.log("solution : ", solution(12)); // true
console.log("solution : ", solution(11)); // false
console.log("solution : ", solution(13)); // false

// 다른 풀이 1 - 속도 우선
// function solution(x) {
//   let num = x;
//   let sum = 0;
//   do {
//       sum += x%10;
//       x = Math.floor(x/10);
//   } while (x>0);

//   return !(num%sum);
// }

// 다른 풀이 2 - 한 줄
// function Harshad(n) {
//   return !(n % (n + "").split("").reduce((a, b) => +b + +a));
// }
