function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

// 다른풀이1
const solution = (x1, x2, x3, x4) => {
  return (x1 + x2) * (x3 + x4) ? true : false;
};
