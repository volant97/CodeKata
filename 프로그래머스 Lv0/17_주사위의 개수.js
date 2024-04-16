function solution(box, n) {
  return (
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
  );
}

// 다른풀이1
// 구조분해할당
function solution(box, n) {
  let [width, length, height] = box;

  return (
    Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
  );
}

// 다른풀이2
// reduce
function solution(box, n) {
  return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
}
