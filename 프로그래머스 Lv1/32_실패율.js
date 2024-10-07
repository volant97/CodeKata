function solution(N, stages) {
  let user = stages.length;
  const result = new Array(N).fill(0).map((_, i) => [i + 1, 0]);

  stages.forEach((v) => {
    const index = v - 1;
    if (index < N) {
      result[index][1]++;
    }
  });

  result.forEach((v) => {
    const currentUser = v[1];
    v[1] = currentUser / user;
    user -= currentUser;
  });

  result.sort((a, b) => b[1] - a[1]);

  return result.map((v) => v[0]);
}

// 다른풀이1
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
