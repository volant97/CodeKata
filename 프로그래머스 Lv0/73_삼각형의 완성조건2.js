function solution(sides) {
    sides.sort((a,b)=>a-b)
    let result = 0
    
    for(let i = 0; i <= sides[1]; i++){
        if(i > sides[1] - sides[0] && i <= sides[1]) result += 1
    }
    
    for(let i = sides[1]; i < sides[1] + sides[0]; i++){
        if(i < sides[1] + sides[0] && i > sides[1]) result += 1
    }
   
    return result
}

// 다른풀이1
// 수학공식
function solution(sides) {
    return Math.min(...sides)*2-1
}

// 다른풀이2
// 수학공식
// 구조분해할당
function solution(sides) {
  const [a, b] = sides.sort((a, b) => a - b);
  return 2 * a - 1;
}

// 다른풀이3
function solution(sides) {
    let a = Math.min(...sides)
    let b = Math.max(...sides)
    let answer = 0
    for(let i = 1 ; i < a+b ; i++){
        let arr = [a,b,i].sort((a,b) => a-b)
        let [q,w,e] = arr
        if(q+w > e){
            answer++
        }
    }
    return answer;
}
