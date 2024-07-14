function solution(myString, pat) {
    const arr = [...myString].map(i => i === "A" ? "B" : "A").join("")
    return arr.includes(pat) ? 1 : 0
}

// 다른풀이1
// 한줄
const solution = (myString, pat) => [...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0

// 다른풀이2
// myString 대신 문자열 길이가 짧은 pat을 뒤집으면 동일한 결과에 속도는 더 빠를거같습니다 (로직의 의도 표현, 확장성은 다소 희생되겠지만)