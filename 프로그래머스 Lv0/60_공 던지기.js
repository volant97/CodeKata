function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}

// 다른풀이1
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}

// 다른풀이2
function solution(numbers, k) {
  const [idx, len] = [k * 2 - 1, numbers.length];
  const findIdx = idx >= len ? idx % len : idx;
  return findIdx;
}
