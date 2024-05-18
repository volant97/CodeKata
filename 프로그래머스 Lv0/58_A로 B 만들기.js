function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

// 테스트케이스 1,5,8,9,10,11,12에서 오류
function solution(before, after) {
    const a = after.split("")
    const b = before.split("")
    let c = ""

    for (let i = 0; i < a.length; i++){
        for (let j = 0; j < b.length; j++){
            if(a[i] === b[j]){
                c += a[i]
                b[j] = ""
            }
        }
    }

    console.log(after)
    return c === after ? 1 : 0
}