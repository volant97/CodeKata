// 풀이 참고함. 나중에 다시 풀어보기
// 수학 문제
function solution(brown, yellow) {
  let height = 2;
  let width = brown / 2;
  let result = -1;
  while (result !== 0) {
    height++;
    width--;
    let mul = height * width;
    result = mul - brown - yellow;
  }
  return [width, height];
}

// 다른풀이1
function solution(brown, red) {
  for (var i = 3; i <= (brown + red) / i; i++) {
    var x = Math.floor((brown + red) / i);
    if ((x - 2) * (i - 2) === red) {
      break;
    }
  }

  return [x, i];
}

// 다른풀이2
// 수학 공식을 이용해서 풀 수 있습니다. (b + √(b² - 4ac)) / 2 형태를 띄는 것으로 보아 이차 방정식 근의 공식을 이용했네요.
function solution(brown, yellow) {
  const x = (brown - 12) * 0.5;
  const y = yellow - brown + 8;
  const i = (8 + x + Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
  const j = (8 + x - Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
  console.log(i);

  var answer = [i, j];
  return answer;
}

// 다른풀이3
function solution(brown, yellow) {
  const width =
    Math.sqrt((brown + 4) ** 2 / 16 - brown - yellow) + (brown + 4) / 4;
  const height = (brown + yellow) / width;
  return [width, height];
}
