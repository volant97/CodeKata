// 각도기

const solution = (angle) => {
  if (0 < angle && angle < 90) {
    return 1
  } else if (angle === 90) {
    return 2
  } else if (90 < angle && angle < 180) {
    return 3
  } else if (angle === 180) {
    return 4
  }
}

console.log(solution(70));  // 1
console.log(solution(91));  // 3
console.log(solution(180));  // 4


// 다른 풀이 1 - filter
// function solution(angle) {
//   return [0, 90, 91, 180].filter(x => angle>=x).length;
// }

// 다른 풀이 2 - 삼항연산자
// function solution(angle) {
//     return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
// }

// 다른 풀이 3
// function solution(angle) {
//   let answer = 1;

//   if (angle >= 90) answer++;
//   if (angle > 90) answer++;
//   if (angle >= 180) answer++;
//   if (angle > 180) answer++;

//   return answer;
// }

// 다른 풀이 - switch
// function solution(angle) {
//   switch (angle) {
//     case 90: return 2;
//     case 180: return 4;
//     default:
//       return angle > 0 && angle < 90 ? 1 : 3;
//   }
// }