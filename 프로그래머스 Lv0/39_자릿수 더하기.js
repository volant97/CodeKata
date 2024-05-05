function solution(n) {
    const arr = [...n.toString()]
    let result = 0
    arr.forEach(e=>result += Number(e))
    return result
}

//다른풀이1
//reduce
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
