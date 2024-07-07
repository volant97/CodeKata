function solution(arr, delete_list) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (delete_list.indexOf(arr[i]) !== -1) {
      arr[i] = 0;
    }
  }

  arr.forEach((i) => {
    if (i !== 0) result.push(i);
  });

  return result;
}

// 다른풀이1
// filter, includes
const solution = (arr, dels) => arr.filter((el) => !dels.includes(el));

// 다른풀이2
// Set, filter, has
function solution(arr, delete_list) {
  const set = new Set(delete_list);
  return arr.filter((v) => !set.has(v));
}
