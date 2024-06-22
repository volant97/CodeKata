// 기본 테스트케이스 오류
// 다시 풀기
function solution(babbling) {
  const speak = ["aya", "ye", "woo", "ma"];
  let result = 0;

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < speak.length; j++) {
      if (babbling[i].split(speak[j]).length >= 2) {
        babbling[i] = babbling[i].split(speak[j]).join("1");
      } else if (babbling[i].split("1").length >= 2) {
        result++;
        break;
      } else {
        continue;
      }
    }
  }

  console.log(result);
}
