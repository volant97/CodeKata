// 예외 조건이 까다롭다
// 지수형식("1e22")을 넣었을 경우 : 숫자로 인식되기 때문에 모든 문자를 split해서 검증해야함
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((c) => !isNaN(c));
  } else {
    return false;
  }
}

// 다른풀이1
// 정규식
// (정규표현식).test("문자열") : "문자열"이 "정규표현식"과 매칭되면 true, 아니면 false반환
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
