function solution(food) {
  for (let i = 0; i < food.length; i++) {
    const half = Math.floor(food[i] / 2);
    const rp = i.toString().repeat(half);
    food[i] = rp;
  }
  const start = food.join("");
  const end = food.reverse().join("");
  const result = [start, 0, end];
  return result.join("");
}

// 다른풀이1
function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}
