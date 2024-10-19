function solution(q, r, code) {
  const result = [];

  code.split("").forEach((v, i) => {
    if (i % q === r) result.push(v);
  });

  return result.join("");
}

// 다른풀이1
// filter
function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join("");
}
