function solution(A, B) {
  let aTextArr = A.split("");
  let result = 0;

  for (let i = 0; i < A.split("").length; i++) {
    if (aTextArr.join("") === B) break;

    const aLast = aTextArr.pop();
    aTextArr.unshift(aLast);
    result++;
  }

  return result === B.length ? -1 : result;
}
