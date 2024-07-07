function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr2.length > arr1.length ? -1 : 1;
  } else {
    let a = 0;
    let b = 0;
    arr1.forEach((i) => (a += i));
    arr2.forEach((i) => (b += i));
    if (b > a) {
      return -1;
    } else if (b < a) {
      return 1;
    } else {
      return 0;
    }
  }
}

// 다른풀이1
// reduce
const solution = (arr1, arr2) => {
  return arr1.length !== arr2.length
    ? compare(arr1.length, arr2.length)
    : compare(arr1, arr2, "reduce");
};

const compare = (a, b, option) => {
  if (option === "reduce") {
    a = a.reduce((acc, cur) => acc + cur);
    b = b.reduce((acc, cur) => acc + cur);
  }
  return a > b ? 1 : a < b ? -1 : 0;
};
