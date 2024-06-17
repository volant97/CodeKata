function solution(num, total) {
  const a = Math.floor(total / num);
  const b = Math.floor(num / 2);
  const c = [];
  let first = 0;

  first = num % 2 === 0 ? a - b + 1 : a - b;

  for (let i = first; i < first + num; i++) {
    c.push(i);
  }

  return c;
}

// 다른풀이1
// 가우스 공식
function solution(num, total) {
  const a = ((2 * total) / num + 1 - num) / 2;
  return Array(num)
    .fill()
    .map((_, i) => i + a);
}
