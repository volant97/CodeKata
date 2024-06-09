function solution(n) {
  let num = n;
  let result = 0;

  for (let i = 1; i <= num; i++) {
    result++;
    if (i % 3 === 0) {
      num++;
    } else if (i.toString().indexOf("3") !== -1) {
      num++;
    }
  }

  return result;
}
