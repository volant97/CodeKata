function solution(quiz) {
    const result = []
    
    for(let i = 0; i < quiz.length; i++){
        const arr = quiz[i].split(" = ")
        const expression = arr[0].split(" ")
        const answer = Number(arr[1])

        let sign = 1
        let sum = 0

        for(let j = 0; j < expression.length; j++){
            if(expression[j] === "+"){
                sign = 1
            } else if(expression[j] === "-"){
                sign = -1
            } else {
                sum += expression[j] * sign
            }
        }

        sum === answer ? result.push("O") : result.push("X")
    }
    
    return result
}

// 다른풀이1
function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}

// 다른풀이2
// 구조분해할당 구체적으로 가능
function solution(quiz) {
    let answer = [];
    quiz.forEach((val) => {
        const [x, sign, y, , z] = val.split(" ");
        let sum = 0;
        if (sign === "+") {
            sum = Number(x) + Number(y);
        } else {
            sum = Number(x) - Number(y);
        }
        sum === Number(z) ? answer.push("O") : answer.push("X");
    });
    return answer;
}

// 다른풀이3
// eval 쓰는 방법. 그러나 보안 이슈가 발생할 수도
function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}