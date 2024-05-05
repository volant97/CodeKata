function solution(str1, str2) {
    if(str1.includes(str2)){
        return 1
    } else {
        return 2
    }
}

//개선
function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2
}

//다른풀이1
//split 기준점으로 나누기
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}