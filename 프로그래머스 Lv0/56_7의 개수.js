function solution(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const a = array[i].toString().split("");
      if (a[j] === "7") count++;
    }
  }

  return count;
}

// 다른풀이1
function solution(array) {
  return array.join("").split("7").length - 1;
}
