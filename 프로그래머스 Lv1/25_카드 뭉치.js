function solution(cards1, cards2, goal) {
  let result = "Yes";

  goal.some((v) => {
    if (cards1[0] === v) {
      cards1.splice(0, 1);
    } else if (cards2[0] === v) {
      cards2.splice(0, 1);
    } else {
      result = "No";
      return true;
    }
  });

  return result;
}

// 다른풀이1
// shift : 배열 첫 번째 요소 제거
function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      cards1.shift();
    } else if (goal[i] === cards2[0]) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
