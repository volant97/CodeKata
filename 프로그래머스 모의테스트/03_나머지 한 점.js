// 논리연산자 XOR(^) : 서로 값이 다를 때 참을 반환하고, 값이 같다면 거짓을 반환한다.
// 쉽게 설명하자면, 세 값 중 두 개가 같고 나머지 하나가 다를 경우 그 다른 값을 반환
// 1 ^ 1 ^ 2 라면, 2반환

function solution(v) {
  const x = v[0][0] ^ v[1][0] ^ v[2][0];
  const y = v[0][1] ^ v[1][1] ^ v[2][1];
  return [x, y];
}

// 다른풀이1
function solution(v) {
  answer[0] = v[0][0] ^ v[1][0] ^ v[2][0];
  answer[1] = v[0][1] ^ v[1][1] ^ v[2][1];

  return answer;
}
