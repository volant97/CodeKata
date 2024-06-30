function solution(num_list) {
    const even = []
    const odd = []
    
    num_list.forEach(i => i % 2 === 0 ? even.push(i) : odd.push(i))
    
    return Number(even.join("")) + Number(odd.join(""))
}