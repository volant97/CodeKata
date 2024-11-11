function solution(ineq, eq, n, m) {
  if (ineq === ">") {
    if (eq === "=") {
      return n >= m ? 1 : 0;
    } else {
      return n > m ? 1 : 0;
    }
  }

  if (ineq === "<") {
    if (eq === "=") {
      return n <= m ? 1 : 0;
    } else {
      return n < m ? 1 : 0;
    }
  }
}

// 다른풀이1
// 객체
const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

// 다른풀이2
function solution(ineq, eq, n, m) {
  if (eq === "=" && n === m) return 1;
  if (ineq === "<" && n < m) return 1;
  if (ineq === ">" && n > m) return 1;
  return 0;
}
