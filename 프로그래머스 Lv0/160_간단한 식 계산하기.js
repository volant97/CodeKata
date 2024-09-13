function solution(binomial) {
  const arr = binomial.split(" ");
  const a = Number(arr[0]);
  const b = Number(arr[2]);

  if (arr[1] === "+") return a + b;
  if (arr[1] === "-") return a - b;
  if (arr[1] === "*") return a * b;
}

// 다른풀이1
const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  return ops[op](+a, +b);
}
