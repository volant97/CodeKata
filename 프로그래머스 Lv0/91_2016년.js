function solution(a, b) {
  const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weeks = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let sumDays = 0;

  for (let i = 0; i < a; i++) {
    sumDays += days[i];
  }

  sumDays += b;

  return weeks[(sumDays - 1) % 7];
}

// 다른풀이1
function getDayName(a, b) {
  var tempDate = new Date(2016, a - 1, b);

  return tempDate.toString().slice(0, 3).toUpperCase();
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5, 24));
