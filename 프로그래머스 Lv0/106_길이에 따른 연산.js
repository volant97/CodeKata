function solution(num_list) {
    let sum = 0
    let mul = 1
    
    num_list.forEach(i=>{
        sum += i
        mul *= i
    })
    
    return num_list.length >= 11 ? sum : mul
}

// 다른풀이1
// reduce
const solution=n=>n.reduce((a,v)=>n.length>10?a+v:a*v)