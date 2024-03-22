// 유효성검사, 정규식

function solution(new_id) {
  let lower = new_id.toLowerCase();

  let level2 = lower.match(/[a-z0-9-_.]/g).join("");

  let level3 = level2.replace(/\.+/g, ".");

  let level4 = level3.replace(/^\.|\.$/g, "");

  let level5 = level4.length === 0 ? "a" : level4;

  let level6 = level5;
  if (level5.length >= 16) {
    level6 = level5.slice(0, 15).replace(/\.$/g, "");
  }

  if (level5.length <= 2) {
    let small = [...level5].pop().repeat(3 - level5.length);
    level6 += small;
    console.log(small);
  }

  return level6;
}

// 다른풀이1
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
