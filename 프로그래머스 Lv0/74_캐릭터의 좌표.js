function solution(keyinput, board) {
    const result = [0, 0]
    const x = (board[0] - 1) / 2
    const y = (board[1] - 1) / 2
    
    for(let i = 0; i < keyinput.length; i++){
        if(keyinput[i] === "left"){
            if(result[0] - 1 < x * -1){
                result[0] = x * -1
            } else {
                result[0] -= 1
            }
        } else if(keyinput[i] === "right"){
            if(result[0] + 1 > x){
                result[0] = x
            } else {
                result[0] += 1
            }
        } else if(keyinput[i] === "up"){
            if(result[1] + 1 > y) {
                result[1] = y
            } else {
            result[1] += 1
            }
        } else if(keyinput[i] === "down"){
            if(result[1] - 1 < y * -1){
                result[1] = y * -1
            } else {
            result[1] -= 1
            }
        }
    }
    
    return result
}

// 다른풀이1
// switch
function solution(keyinput, board) {
    let res = [0,0];
    for (let p of keyinput) {
        switch(p){
            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
        }
    }
    return res;
}