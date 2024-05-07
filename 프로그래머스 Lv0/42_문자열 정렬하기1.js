function solution(my_string) {
  const regex = /[^0-9]/g;
  const replace = my_string.replace(regex, "");
  const result = [...replace].sort((a, b) => a - b).map((i) => Number(i));
  return result;
}

// 다른풀이1
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}

// 다른풀이2
function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}

// 디픈풀이3
function solution(my_string) {
  return my_string
    .replace(/[^\d]/g, "")
    .split("")
    .map((v) => +v)
    .sort();
}
