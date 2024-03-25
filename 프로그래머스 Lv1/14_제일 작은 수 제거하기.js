function solution(arr) {
  const minNum = Math.min(...arr);
  const minNumIndex = arr.indexOf(minNum);
  arr.splice(minNumIndex, 1);
  return (answer = arr.length === 0 ? [-1] : arr);
}
