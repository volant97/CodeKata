// 부족한 금액 계산하기

function solution(price, money, count) {
  let answer = 0;
  for (let i = 1; i <= count; i++) {
    answer += price * i
  }
  return money > answer ? 0 : answer - money;
}

console.log(solution(3, 20, 4));  // 10


// 다른 풀이 1 - 가우스 공식
// function solution(price, money, count) {
//     const tmp = price * count * (count + 1) / 2 - money;
//     return tmp > 0 ? tmp : 0;
// }

