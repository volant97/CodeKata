function solution(arr, queries) {
  queries.forEach((v) => {
    for (let i = v[0]; i <= v[1]; i++) {
      if (i % v[2] === 0) arr[i]++;
    }
  });

  return arr;
}

// 다른풀이1
// 구조분해할당
function solution(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  }
  return arr;
}

// 다른풀이2
// reduce
function solution(arr, queries) {
  return queries.reduce(
    (bucket, [s, e, k]) => {
      for (let i = s; i <= e; i += 1) {
        if (i % k === 0) bucket[i] += 1;
      }
      return bucket;
    },
    [...arr]
  );
}
