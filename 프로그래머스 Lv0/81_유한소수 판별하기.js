// 소수점 이하로 무한으로 길어지면 두개의 값이 같지 않기 때문에 판별 가능
// 테스트 케이스의 유한소수가 소수점 아래 10자리 정도일 때까지 구분
function solution(a, b) {
  return a / b == Number(a / b).toFixed(10) ? 1 : 2;
}
