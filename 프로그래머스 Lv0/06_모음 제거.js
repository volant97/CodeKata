function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];
  const split = my_string.split("");

  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (split[i] === vowel[j]) {
        split[i] = "";
      }
    }
  }

  return split.join("");
}

// 다른풀이1
// 정규식
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
