// 최소직사각형

function solution(sizes) {
  const width = []; //[60, 70, 60, 80]
  const height = []; //[50, 30, 30, 40]

  for (i = 0; i < sizes.length; i++) {
    const max = Math.max(sizes[i][0], sizes[i][1]);
    const min = Math.min(sizes[i][0], sizes[i][1]);
    width.push(max);
    height.push(min);
  }

  return Math.max(...width) * Math.max(...height); //80 * 50 = 4000
}

// 가로(sizes[i][0]) or 세로(sizes[i][1]) 중 더 큰 값을 가로에 놓고, 작은 값은 세로가 되도록 배치
// 가로길이 max * 세로길이 max = 모든 명함이 들어갈 수 있는 사각형의 최소사이즈
