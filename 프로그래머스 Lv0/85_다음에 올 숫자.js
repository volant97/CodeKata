function solution(common) {
  const first = common[0];
  const index = common.length - 1;
  const interval = common[1] - first;

  if (first + interval === common[1] && common[1] + interval === common[2]) {
    const a = interval;
    return common[index] + a;
  } else {
    const b = common[1] / first;
    return common[index] * b;
  }
}

// 다른풀이1
function solution(common) {
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    return (common.pop() * common[1]) / common[0];
  }
}
