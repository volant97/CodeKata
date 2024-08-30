function solution(my_string) {
  let arr = [];
  my_string.split(" ").forEach((v) => {
    if (v !== "") arr.push(v);
  });
  return arr;
}

// 개선
function solution(my_string) {
  return my_string.split(" ").filter((v) => v !== "");
}

// 다른풀이1
function solution(my_string) {
  return my_string.split(" ").filter((v) => v);
}

// 다른풀이2
function solution(my_string) {
  return my_string.trim().split(/ +/);
}
