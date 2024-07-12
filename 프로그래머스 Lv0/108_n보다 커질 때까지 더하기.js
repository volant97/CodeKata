// forEach break와 같이 쓰는 방법 : some, return true
// return true : break
// return false : continue
function solution(numbers, n) {
    let sum = 0
    
    numbers.some(i=>{
        sum += i
        if(sum > n) return true
    })
    
    return sum
}

// 다른풀이1
// while
function solution(numbers, n) {
    var answer = 0;
    let i = 0;
    while(answer <= n) {
        answer += numbers[i++]
    }
    return answer;
}

// 다른풀이2
// reduce
function solution(numbers, n) {
    return numbers.reduce((a,c,i,t)=>(a<=n)?a+c:a)
}