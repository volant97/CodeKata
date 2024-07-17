function solution(names) {
  const result = [];

  for (let i = 0; i < names.length; i++) {
    if (i % 5 === 0) result.push(names[i]);
  }

  return result;
}

// 다른풀이1
//filter
// Q : 이러면 필요없는 반복을 하게되지 않나요? 차라리 for문을 사용해서 idx를 5씩 건너뛰는게 시간복잡도가 더 적을것 같은데..
// A : 시간복잡도를 따지지 않는 문제를 푸는 입장에선, 코드를 짧게 쓰게된다는 장점과 나중에 가독성이 좋다는 면에서 이 코드가 더 좋을 것 같습니다. 물론 극한으로 시간복잡도를 따진다면 for문을 쓰는 게 맞는데 그렇다면 고수준 언어인 자바스크립트를 쓰는 것보다 저수준을 다루는 cpp를 쓰는게 좋아보이네요
const solution = (names) => names.filter((_, i) => !(i % 5));

// 다른풀이2
// for문을 사용해서 idx를 5씩 건너뛰기
function solution(names) {
  var answer = [];
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }
  return answer;
}
