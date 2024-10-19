function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  if (n === 1) {
    return num_list.slice(0, b + 1);
  }
  if (n === 2) {
    return num_list.slice(a);
  }
  if (n === 3) {
    return num_list.slice(a, b + 1);
  }
  if (n === 4) {
    const arr = num_list.slice(a, b + 1);
    return arr.filter((_, i) => i % c === 0);
  }
}

// 다른풀이1
// switch case
function solution(n, slicer, num_list) {
  let [a, b, c] = [...slicer];

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
  }
}

// 다른풀이2
// 객체
const slices = {
  1: (num_list, [a, b, c]) => num_list.slice(0, b + 1),
  2: (num_list, [a, b, c]) => num_list.slice(a),
  3: (num_list, [a, b, c]) => num_list.slice(a, b + 1),
  4: (num_list, [a, b, c]) =>
    num_list.slice(a, b + 1).filter((_, i) => i % c === 0),
};

function solution(n, slicer, num_list) {
  return slices[n](num_list, slicer);
}

// 다른풀이3
// 마지막 if문은 생략 가능. 경우의 수가 4가지뿐이라서.
function solution(n, [a, b, c], num_list) {
  if (n === 1) return num_list.slice(0, b + 1);
  if (n === 2) return num_list.slice(a);
  if (n === 3) return num_list.slice(a, b + 1);
  return num_list.slice(a, b + 1).filter((_, i) => !(i % c));
}
