// 약수의 합

const solution = (n) => {
  let answer = 0;
  for(let i=0; i<=n; i++){
    if(n % i === 0){answer+=i}
  }
  return answer
}

console.log(solution(12));  // 28
console.log(solution(5));  // 6
