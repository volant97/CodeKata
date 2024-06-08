function solution(chicken) {
  let coupon = chicken;
  let service = 0;

  for (let i = 0; i < i + 1; i++) {
    if (coupon < 10) break;
    service += Math.floor(coupon / 10);
    coupon = (coupon % 10) + Math.floor(coupon / 10);
  }

  return service;
}

// 다른풀이1
// 서비스를 받고 다음 서비스를 받기 까지는 9개의 구매가 매번 필요함.
// 근데 왜 9인가 하면 나머지 한번은 서비스가 채워줬기 때문입니다.
// 서비스 1번 + 내돈대산 9번으로 10번이 되어서 새로운 서비스 치킨이 생기는거죠.
// 그런데 첫 서비스 치킨은 서비스 치킨 없이 전부 내돈내산 해야 합니다.
// 내돈내산으로 10을 해야하죠. 그래서 1을 뺍니다.
function solution(chicken) {
  var answer = parseInt((chicken - 1) / 9);
  return answer;
}

// 다른풀이2
// 먼저 chicken * 0.111111은 chicken 값을 0.111111로 곱한 결과를 나타냅니다.
// 이는 chicken 값을 9로 나눈 것과 동일합니다.
// 그런데 이 수식 앞에 ~~ 연산자가 사용되었습니다.
// ~~ 연산자는 비트 연산자인 논리 NOT 연산자를 두 번 사용하여 소수점 아래의 값이 버려지고 정수 부분만 남게 됩니다.
// 즉, 소수점 이하를 버리고 정수 부분만 반환합니다.
// 따라서 이 코드는 chicken 값을 9로 나눈 후 소수점 아래 값을 버리고, 정수 부분인 최대 서비스 치킨의 개수를 반환하는 것입니다.
// 예를 들어, chicken 값이 100일 경우, 100 * 0.111111은 11.1111이 되고, ~~(100 * 0.111111)은 11이 됩니다.
// 따라서 100마리의 주문에 대해 최대 11마리의 서비스 치킨을 받을 수 있다는 의미입니다.
function solution(chicken) {
  return ~~(chicken * 0.111111);
}
