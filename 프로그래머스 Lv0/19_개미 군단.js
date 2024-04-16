function solution(hp) {
  let result = 0;
  for (let i = 0; i <= 1000; i++) {
    if (hp >= 5) {
      result += 1;
      hp -= 5;
      continue;
    } else if (hp >= 3) {
      result += 1;
      hp -= 3;
      continue;
    } else if (hp >= 1) {
      result += 1;
      hp -= 1;
      continue;
    }
  }
  return result;
}

// 다른풀이1
// 몫과 나머지
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

// 다른풀이2
function solution(hp) {
  const 장군개미 = Math.floor(hp / 5);
  const 병정개미 = Math.floor((hp - 장군개미 * 5) / 3);
  const 일개미 = hp - (장군개미 * 5 + 병정개미 * 3);
  return 장군개미 + 병정개미 + 일개미;
}

// 다른풀이3
// ~~은 Math.floor()로 대신 사용가능합니다.
function solution(hp) {
  let ant = [5, 3, 1];
  let ans = [];

  for (let v of ant) {
    ans.push(~~(hp / v));
    hp %= v;
  }

  return ans.reduce((a, v) => a + v, 0);
}
