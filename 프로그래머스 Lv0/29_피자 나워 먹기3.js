function solution(slice, n) {
  return n % slice === 0 ? n / slice : Math.floor(n / slice) + 1;
}

// 다른풀이1
// ceil 올림
function solution(slice, n) {
  return Math.ceil(n / slice);
}

// 다른풀이
// while
function solution(slice, n) {
  let i = 1;
  while (slice * i < n) {
    i++;
  }
  return i;
}
