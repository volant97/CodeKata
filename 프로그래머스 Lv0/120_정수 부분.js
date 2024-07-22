function solution(flo) {
  return Math.floor(flo);
}

// 다른풀이1
// ~~연산자
// tilde(~) : 비트연산자로 NOT의 기능
// double tilde(~~) : tilde를 2번 반복 / 속도 측면에서 ~~가 빠르다
// ~~ , Math.floor, parseInt 순으로 ~~가 가장 빠른 퍼포먼스를 보여준다
const solution = (flo) => ~~flo;

// 다른풀이2
// parseInt
function solution(flo) {
  return parseInt(flo);
}
