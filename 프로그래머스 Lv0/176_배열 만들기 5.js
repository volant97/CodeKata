function solution(intStrs, k, s, l) {
  const result = [];
  intStrs.forEach((v) => {
    const num = Number(v.slice(s, s + l));
    if (num > k) result.push(num);
  });
  return result;
}

// 다른풀이1
function solution(intStrs, k, s, l) {
  return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}
