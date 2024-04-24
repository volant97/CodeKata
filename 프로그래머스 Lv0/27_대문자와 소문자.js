function solution(my_string) {
  const arr = my_string.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }

  return arr.join("");
}

// 다른풀이1
// for of 활용
// for of : 배열
// for in : 객체
function solution(my_string) {
  const arr = my_string.split("");
  const result = [];

  for (let i of arr) {
    if (i === i.toUpperCase()) {
      result.push(i.toLowerCase());
    } else {
      result.push(i.toUpperCase());
    }
  }

  return result.join("");
}

// 다른풀이2
// for of 간략하게
function solution(my_string) {
  var answer = "";
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}

// 다른풀이3
// map
function solution(my_string) {
  return my_string
    .split("")
    .map((n) => (n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
    .join("");
}

// 다른풀이4
// for문 삼항연산자
function solution(my_string) {
  const arr = my_string.split("");

  for (let i = 0; i < arr.length; i++) {
    arr[i] =
      arr[i] === arr[i].toUpperCase()
        ? arr[i].toLowerCase()
        : arr[i].toUpperCase();
  }

  return arr.join("");
}
