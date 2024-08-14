function solution(my_string, index_list) {
  const result = [];
  index_list.forEach((v) => result.push(my_string[v]));
  return result.join("");
}

// 다른풀이1
// 배열을 출력하니까 map이 더 적절
function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}

// 다른풀이2
// reduce
function solution(my_string, index_list) {
  return index_list.reduce((result, i) => result + my_string[i], "");
}
