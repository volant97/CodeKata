function solution(order) {
  let result = 0;

  order.forEach((v) => {
    if (v.includes("americano") || v === "anything") result += 4500;
    if (v.includes("cafelatte")) result += 5000;
  });

  return result;
}

// 다른풀이1
// reduce
// includes 조건의 latte만 추가하여 조건문 최소화
const solution = (order) =>
  order.reduce((acc, cur) => acc + (cur.includes("latte") ? 5000 : 4500), 0);
