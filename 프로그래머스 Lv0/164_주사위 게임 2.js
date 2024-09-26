function solution(a, b, c) {
  let answer = 0;
  if (a === b && a === c && b === c) {
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    );
  } else if (a !== b && a !== c && b !== c) {
    return a + b + c;
  } else {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  }
}

// 다른풀이1
// Set
function solution(a, b, c) {
  const dsttCnt = new Set([a, b, c]).size;

  switch (dsttCnt) {
    case 3:
      return a + b + c;
    case 2:
      return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    case 1:
      return (
        (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
      );
  }
}
