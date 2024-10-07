function solution(my_string, s, e) {
  const text = my_string.slice(s, e + 1);
  const reverse = [...text].reverse().join("");
  return my_string.replace(text, reverse);
}
