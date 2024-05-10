function solution(num, k) {
  const result = num.toString().split("").indexOf(k.toString());
  return result + 1 || -1;
}

// 다른풀이
// || 연산자
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}

// 다른풀이
// 맨앞에 문자를 추가하면서 해당 과정들을 모두 생략 + index에 의한 값도 고려
function solution(num, k) {
  return ("❤" + num).indexOf(k);
}
