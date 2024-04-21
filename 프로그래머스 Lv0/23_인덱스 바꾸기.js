function solution(my_string, num1, num2) {
  const arr = my_string.split("");
  const str1 = arr[num1];
  const str2 = arr[num2];

  arr[num1] = str2;
  arr[num2] = str1;

  return arr.join("");
}

// 다른풀이1
// 구조분해할당
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
