function solution(spell, dic) {
  let count = 0;

  for (let i = 0; i < dic.length; i++) {
    const a = dic[i].split("");
    const b = [...spell];

    for (let j = 0; j < spell.length; j++) {
      if (a.indexOf(spell[j]) !== -1) {
        a[a.indexOf(spell[j])] = "";
        b[b.indexOf(spell[j])] = "";
      }
    }

    if (a.join("").length === 0 && b.join("").length === 0) count++;
  }

  return count >= 1 ? 1 : 2;
}

// 다른풀이1
// some
// every() 함수는 배열의 모든 요소가 조건을 충족하는지 확인하고 (AND),
// some() 함수는 배열의 1개 요소라도 특정 조건을 충족하는지 확인(OR)하는데 사용한다.
function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
