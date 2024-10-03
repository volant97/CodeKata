function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      arr[j]++;
    }
  }

  return arr;
}

// 다른풀이1
function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    while (s <= e) arr[s++]++;
  });
  return arr;
}

// 다른풀이2
// for of
// 구조분해할당
function solution(arr, queries) {
  const N = arr.length;

  for (const [start, end] of queries) {
    for (let i = start; i <= end; i += 1) {
      arr[i] += 1;
    }
  }

  return arr;
}
