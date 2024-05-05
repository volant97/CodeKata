function solution(numbers) {
    const arr = numbers.sort((a,b)=>a-b)
    const l = arr.length
    return Math.max(arr[0] * arr[1], arr[l-2] * arr[l-1])
}

// 다른풀이1
function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] * numbers[j]);
        }
    }
    return Math.max(...answer);
}