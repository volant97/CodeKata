function solution(numbers) {
  const arr = numbers.sort((a, b) => b - a);
  return arr[0] * arr[1];
}

// 다른풀이1
// 구조분해할당
function solution(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}
