// slice, replave, 정규식 활용 방법
function solution(phoneNumber) {
  const frontNumber = phoneNumber
    .slice(0, phoneNumber.length - 4)
    .replace(/[0-9]/g, "*");
  const backNumber = phoneNumber.slice(phoneNumber.length - 4);

  return frontNumber + backNumber;
}
