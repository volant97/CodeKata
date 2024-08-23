function solution(num_list) {
  let odd = 0;
  let even = 0;

  num_list.forEach((v, i) => {
    if (i % 2 === 0) {
      odd += v;
    } else {
      even += v;
    }
  });

  return odd >= even ? odd : even;
}

// 다른풀이1
function solution(num_list) {
  let odd = 0;
  let even = 0;

  num_list.forEach((x, i) => (i % 2 == 0 ? (even += x) : (odd += x)));

  return Math.max(odd, even);
}
