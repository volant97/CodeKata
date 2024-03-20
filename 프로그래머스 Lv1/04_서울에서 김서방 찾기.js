function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

// 다른풀이1
const solution = (seoul) => {
  const answer = seoul.findIndex((item) => item === "Kim");
  return `김서방은 ${answer}에 있다`;
};
