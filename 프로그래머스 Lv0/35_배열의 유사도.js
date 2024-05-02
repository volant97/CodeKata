function solution(s1, s2) {
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s2[j] === s1[i]) result += 1;
    }
  }
  return result;
}

// 개선
function solution(s1, s2) {
  let result = 0;
  for (var i = 0; i < s1.length; i++) {
    for (var j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) result++;
    }
  }
  return result;
}

// 다른풀이1
// filter, includes
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}
