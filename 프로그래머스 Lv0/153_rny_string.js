function solution(rny_string) {
  return rny_string
    .split("")
    .map((v) => (v === "m" ? "rn" : v))
    .join("");
}

// 다른풀이1
function solution(rny_string) {
  return rny_string.replaceAll(/m/g, "rn");
}

// 다른풀이2
const solution = (r) => r.replaceAll("m", "rn");

// 다른풀이3
function solution(rny_string) {
  var answer = "";
  return [...rny_string].map((e) => (e == "m" ? "rn" : e)).join("");
}
