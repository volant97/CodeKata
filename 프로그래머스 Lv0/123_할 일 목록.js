function solution(todo_list, finished) {
  const result = [];
  todo_list.forEach((v, i) => !finished[i] && result.push(v));
  return result;
}

// 다른풀이1
// filter
function solution(todo_list, finished) {
  return todo_list.filter((e, i) => !finished[i]);
}
