function solution(my_string) {
  const arr = my_string.split("");
  const result = [];

  for (let i = 0; i < my_string.length; i++) {
    result.push(arr.join(""));
    arr.shift();
  }

  return result.sort();
}

// 다른풀이1
// substring
function solution(my_string) {
  return Array.from(my_string)
    .map((_, i) => my_string.substring(i))
    .sort();
}

// 다른풀이2
// slice
function solution(my_string) {
  const arr = [];

  for (let i = 0; i < my_string.length; i++) {
    arr.push(my_string.slice(i));
  }

  return arr.sort();
}
