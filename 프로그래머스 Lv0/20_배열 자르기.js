function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// 다른풀이1
// filter
function solution(numbers, num1, num2) {
  return numbers.filter((n, i) => num1 <= i && i <= num2);
}
