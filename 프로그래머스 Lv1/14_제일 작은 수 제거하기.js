function solution(arr) {
  const min = Math.min(...arr);
  const index = arr.indexOf(min);
  arr.splice(index, 1);
  if (arr.length === 0) arr.push(-1);
  return arr;
}

// 다른풀이1
function solution(arr) {
  const minNum = Math.min(...arr);
  const minNumIndex = arr.indexOf(minNum);
  arr.splice(minNumIndex, 1);
  return (answer = arr.length === 0 ? [-1] : arr);
}

// 다른풀이2
function solution(arr) {
  const min = Math.min(...arr);
  return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];
}
