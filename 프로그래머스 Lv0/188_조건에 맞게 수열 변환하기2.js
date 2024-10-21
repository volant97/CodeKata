// 50크고 짝수 === /2
// 50작고 홀수 === *2 + 1

function solution(arr) {
  let count = 0;

  for (let i = 0; i < i + 1; i++) {
    const cur = [...arr];
    for (let j = 0; j < arr.length; j++) {
      const v = arr[j];
      if (v % 2 === 0 && v >= 50) {
        arr[j] = Number(v / 2);
      } else if (v % 2 !== 0 && v < 50) {
        arr[j] = Number(v * 2 + 1);
      }
    }
    if (arr.join("") == cur.join("")) break;
    count++;
  }

  return count;
}

// 다른풀이1
// 원래 내가 처음에 구상했던 while문 활용법
// while
// every
function solution(arr) {
  var answer = 0;
  let before = [-1];

  while (!arr.every((e, idx) => e == before[idx])) {
    before = [...arr];

    arr = arr.map((e) => {
      if ((e >= 50) & (e % 2 == 0)) return e / 2;
      if ((e < 50) & (e % 2 != 0)) return e * 2 + 1;
      return e;
    });
    answer++;
  }
  return answer - 1;
}
