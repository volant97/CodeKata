// 핸드폰 번호 가리기

function solution(phoneNumber) {
  const frontNumber = phoneNumber.slice(0, phoneNumber.length - 4).replace(/[0-9]/g,"*");
  // (/[0-9]/g,"*") = (/\d/g,"*")
  const backNumber = phoneNumber.slice(phoneNumber.length - 4);
 
  return frontNumber + backNumber;
}

console.log(solution("01033334444"));  // "*******4444"
console.log(solution("027778888"));  // "*****8888"


// 다른 풀이 1
// function solution(s) {
//   return s.replace(/\d(?=\d{4})/g, "*");
// }

// 다른 풀이 2
// function solution(s){
//   var result = "*".repeat(s.length - 4) + s.slice(-4);
//   return result;
// }

// 다른 풀이 3
// .split('').fill("*").join('')
// function solution(phoneNumber) {
//   const frontNumber = phoneNumber.slice(0, phoneNumber.length - 4).split('').fill("*").join('');
//   const backNumber = phoneNumber.slice(phoneNumber.length - 4);
 
//   return frontNumber + backNumber;
// }