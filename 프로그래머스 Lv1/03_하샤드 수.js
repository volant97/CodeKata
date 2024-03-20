function solution(x) {
  const arrX = x.toString().split("");
  let sumX = 0;

  for (let i = 0; i < arrX.length; i++) {
    sumX += Number(arrX[i]);
  }

  return x % sumX === 0 ? true : false;
}

// 다른풀이1
function solution(x) {
  let answer = true;
  const xArr = x.toString().split("");
  let sum = 0;

  for (i = 0; i < xArr.length; i++) {
    sum += Number(xArr[i]);
  }

  return (answer = x % sum === 0 ? true : false);
}
