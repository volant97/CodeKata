function solution(arr, queries) {
  queries.forEach((v) => {
    const [a, b] = [arr[v[0]], arr[v[1]]];
    arr[v[0]] = b;
    arr[v[1]] = a;
  });

  return arr;
}

// 다른풀이1
function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}

// 다른풀이2
function solution(arr, queries) {
  for (let [i, j] of queries) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
