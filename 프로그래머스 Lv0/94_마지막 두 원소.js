function solution(num_list) {
  if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
    num_list.push(
      num_list[num_list.length - 1] - num_list[num_list.length - 2]
    );
  } else {
    num_list.push(num_list[num_list.length - 1] * 2);
  }
  return num_list;
}

// 다른풀이1
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}
