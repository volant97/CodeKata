// 테스트 케이스 3~12번 실패...
// 문제 이해를 잘못함. 무조건 "1231" 세트로 고정되어 들어옴.
// 중간에 필요없는 숫자가 껴있는 경우도 생각하느라 복잡해졌음
function solution(ingredient) {
  let food = ingredient.slice(ingredient.indexOf(1));
  let index = [-1, -1, -1, -1];
  let result = 0;

  for (let i = 0; i < food.length; i++) {
    if (food[i] === 1 && index[0] === -1) {
      index[0] = food.indexOf(1);
      food[food.indexOf(1)] = 0;
    }
    if (food[i] === 2 && index[1] === -1 && index[0] < food.indexOf(2)) {
      index[1] = food.indexOf(2);
    }
    if (food[i] === 3 && index[2] === -1 && food.indexOf(2) < food.indexOf(3)) {
      index[2] = food.indexOf(3);
    }
    if (food[i] === 1 && index[0] !== -1 && food.indexOf(3) < food.indexOf(1)) {
      index[3] = food.indexOf(1);
    }
    if (food[i] === 1 && index[0] !== -1 && food.indexOf(3) > food.indexOf(1)) {
      food[food.indexOf(1)] = 4;
    }

    if (index.indexOf(-1) === -1) {
      result++;
      food[index[1]] = 0;
      food[index[2]] = 0;
      food[index[3]] = 0;
      for (let j = 0; j < food.length; j++) {
        if (food[j] === 4) food[j] = 1;
      }
      index = [-1, -1, -1, -1];
      i = -1;
    }
  }

  return result;
}

// 다른풀이1
function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      const burger_ingredient = stack.slice(-4).join("");

      if (burger_ingredient === "1231") {
        stack.splice(-4);
        answer += 1;
      }
    }
  }

  return answer;
}
