function solution(str_list) {
  let direction = undefined;

  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") {
      str_list[i] = "split";
      direction = "left";
      break;
    }

    if (str_list[i] === "r") {
      str_list[i] = "split";
      direction = "right";
      break;
    }
  }

  if (direction === "left")
    return str_list.join("").split("split")[0].split("");
  if (direction === "right")
    return str_list.join("").split("split")[1].split("");

  return [];
}

// 다른풀이1
// slice가 있구나
// for문 안에서도 return이 먹는구나
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "l") return arr.slice(0, i);
    if (arr[i] === "r") return arr.slice(i + 1);
  }
  return [];
}
