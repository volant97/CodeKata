function solution(arr) {
  const indexArr = [];
  let index = arr.indexOf(2);

  while (index !== -1) {
    indexArr.push(index);
    index = arr.indexOf(2, index + 1);
  }

  const result = arr.slice(indexArr[0], indexArr[indexArr.length - 1] + 1);

  return result.length ? result : [-1];
}

// 다른풀이1
// indexOf, lastIndexOf
function solution(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return from === -1 ? [-1] : arr.slice(from, end + 1);
}

// 다른풀이2
function solution(arr) {
  let start = 2;
  let end = 2;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      if (start === 2) {
        start = i;
      }
      end = i;
    }
  }
  if (start == 2 && end == 2) {
    return [-1];
  }
  return arr.slice(start, end + 1);
}
