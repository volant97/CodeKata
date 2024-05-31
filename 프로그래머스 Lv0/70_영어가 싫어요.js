function solution(numbers) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < arr.length; i++) {
    // 해당 부분 : 변환된 값을 numbers에 다시 선언해야 유지가 됨
    numbers = numbers.replaceAll(arr[i], i);
  }

  return Number(numbers);
}

// 다른풀이1
// forEach
function solution(numbers) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  arr.forEach((item, index) => {
    numbers = numbers.replaceAll(item, index);
  });

  return Number(numbers);
}

// 다른풀이2
// 정규식
// 2번째 인자에 콜백
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );

  return Number(num);
}

// 다른풀이3
// reduce
// 인덱스 활용
var solution = (n) =>
  Number(
    [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ].reduce((t, s, i) => t.replaceAll(s, i), n)
  );
