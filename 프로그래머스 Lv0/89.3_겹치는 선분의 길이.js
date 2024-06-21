// 89.3
// 풀이 완료
function solution(lines) {
  const line = [
    [...lines].sort((a, b) => a[0] - b[0])[0][0],
    [...lines].sort((a, b) => b[1] - a[1])[0][1],
  ];
  const lineArr = new Array(line[1] - line[0] + 1)
    .fill()
    .map((v, i) => [line[0] + i, 0]);
  let result = 0;

  for (let i = lineArr[0][0]; i <= lineArr[lineArr.length - 1][0]; i++) {
    if (i >= lines[0][0] && i < lines[0][1]) {
      lineArr[i - line[0]][1]++;
    }

    if (i >= lines[1][0] && i < lines[1][1]) {
      lineArr[i - line[0]][1]++;
    }

    if (i >= lines[2][0] && i < lines[2][1]) {
      lineArr[i - line[0]][1]++;
    }
  }

  lineArr.forEach((v) => {
    if (v[1] >= 2) result++;
  });

  return result;
}

// 다른풀이1
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}

// -------------------------------------

// 89.2
// 3, 7번 테스트케이스 오류
// 다시 풀기
function solution(lines) {
  const arr = [[], [], []];
  const resultArr = [];
  let result = 0;

  for (let i = lines[0][0]; i <= lines[0][1]; i++) arr[0].push(i);
  for (let i = lines[1][0]; i <= lines[1][1]; i++) arr[1].push(i);
  for (let i = lines[2][0]; i <= lines[2][1]; i++) arr[2].push(i);

  arr.sort((a, b) => a[0] - b[0]);

  console.log(arr);

  for (let i = arr[1][0]; i <= arr[1][arr[1].length - 1]; i++) {
    if (arr[0].indexOf(i) !== -1 && resultArr.indexOf(i) === -1)
      resultArr.push(i);
    if (arr[2].indexOf(i) !== -1 && resultArr.indexOf(i) === -1)
      resultArr.push(i);
  }
  for (let i = arr[0][0]; i <= arr[0][arr[0].length - 1]; i++) {
    if (arr[2].indexOf(i) !== -1 && resultArr.indexOf(i) === -1)
      resultArr.push(i);
  }

  resultArr.sort((a, b) => a - b);

  console.log("resultArr : ", resultArr);

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] + 1 === resultArr[i + 1]) result++;
  }

  return result;
}

// 89.1
// 1, 2, 3, 7, 8, 9번 테스트케이스 오류
// 다시 풀기
function solution(lines) {
  const arr = [[], [], []];
  const resultArr = [];
  let result = 0;

  for (let i = lines[0][0]; i <= lines[0][1]; i++) arr[0].push(i);
  for (let i = lines[1][0]; i <= lines[1][1]; i++) arr[1].push(i);
  for (let i = lines[2][0]; i <= lines[2][1]; i++) arr[2].push(i);

  arr.sort((a, b) => a[0] - b[0]);

  console.log(arr);

  for (let i = arr[1][0]; i <= arr[1][arr[1].length - 1]; i++) {
    if (arr[0].indexOf(i) !== -1 && resultArr.indexOf(i) === -1)
      resultArr.push(i);
    if (arr[2].indexOf(i) !== -1 && resultArr.indexOf(i) === -1)
      resultArr.push(i);
  }

  resultArr.sort((a, b) => a - b);

  console.log("resultArr : ", resultArr);

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] + 1 === resultArr[i + 1]) result++;
  }

  return result;
}

// 1, 2, 8, 9번 테스트케이스 오류
// 다시 풀기
function solution(lines) {
  const arr = [[], [], []];
  let resultA = 0;
  let resultB = 0;
  let resultC = 0;

  for (let i = lines[0][0]; i <= lines[0][1]; i++) arr[0].push(i);
  for (let i = lines[1][0]; i <= lines[1][1]; i++) arr[1].push(i);
  for (let i = lines[2][0]; i <= lines[2][1]; i++) arr[2].push(i);

  arr.sort((a, b) => a[0] - b[0]);

  for (let i = arr[1][0]; i <= arr[1][arr[1].length - 1]; i++) {
    if (arr[0].indexOf(i) !== -1) resultA++;
    if (arr[2].indexOf(i) !== -1) resultB++;
  }

  if (resultA !== 0) resultA--;
  if (resultB !== 0) resultB--;

  resultC = resultA + resultB;

  for (let i = arr[0][0]; i <= arr[0][arr[0].length - 1]; i++) {
    if (arr[2].indexOf(i) !== -1) resultC--;
  }

  if (resultC !== resultA + resultB) resultC++;

  return resultC;
}
