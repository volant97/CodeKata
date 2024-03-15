function solution(array) {
  // sort로 유니코드 순서가 아닌, 숫자 크기 순서대로 정렬
  array.sort((a, b) => a - b);

  const div = array.length / 2;
  const center = Math.floor(div);

  return array[center];
}

// 다른풀이1
// 동일코드, 간결한 풀이
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
