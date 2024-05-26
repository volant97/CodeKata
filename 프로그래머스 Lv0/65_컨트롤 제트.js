function solution(s) {
  const arr = s.split(" ").reverse();
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      i++;
    } else {
      result += Number(arr[i]);
    }
  }

  return result;
}
