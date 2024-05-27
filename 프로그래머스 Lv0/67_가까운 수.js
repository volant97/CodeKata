function solution(array, n) {
  array.sort();
  const arr = array.map((i) => Math.abs(n - i));
  const index = arr.indexOf(Math.min(...arr));

  return array[index];
}

// 다른풀이1
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}
