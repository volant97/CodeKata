function solution(my_string, alp) {
    return my_string.split("").map(i => i === alp ? i.toUpperCase() : i).join("")
}

// 다른풀이1
// replaceAll
const solution=(s,a)=>s.replaceAll(a,a.toUpperCase())

// 다른풀이2
// 정규식
function solution(my_string, alp) {
    let re = new RegExp(alp, "g");
    return my_string.replace(re, alp.toUpperCase());
}