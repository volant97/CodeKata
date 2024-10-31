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

// 다른풀이2
function solution(order) {
  return order.reduce((acc, cur) => {
    if (cur.includes("americano")) {
      return acc + 4500;
    } else if (cur.includes("cafelatte")) {
      return acc + 5000;
    } else {
      return acc + 4500;
    }
  }, 0);
}
