function solution(myString) {
    return [...myString].map(i => i.toLowerCase() === "a" ? "A" : i.toLowerCase()).join("")
}

// 다른풀이1
// replaceAll
const solution=s=>s.toLowerCase().replaceAll('a','A');

// 다른풀이2
// 배열에 includes 사용 (여러개 포함하는 것 찾기)
function solution(myString) {
    return [...myString].map(str => ['a', 'A'].includes(str)? 'A' : str.toLowerCase()).join('');
}