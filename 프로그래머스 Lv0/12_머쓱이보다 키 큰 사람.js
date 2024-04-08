function solution(array, height) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) result++;
  }

  return result;
}

// 다른풀이1
// filter
function solution(array, height) {
  var answer = array.filter((item) => item > height);
  return answer.length;
}

// 다른풀이2
// map
// map은 새 배열을 return하는거라 배열을 순회하면서 메서드만 실행하고 싶으면 map 대신 forEach를 쓰는 게 더 좋을듯
function solution(array, height) {
  let result = 0;
  array.map((arr) => height < arr && result++);

  return result;
}
