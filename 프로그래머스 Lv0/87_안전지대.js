function solution(board) {
  const width = board.length;
  const index = width - 1;
  const all = width * width;
  let danger = 0;

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 3;
        if (j - 1 >= 0) {
          if (board[i][j - 1] === 0) board[i][j - 1] = 3;
        }
        if (j + 1 <= index) {
          if (board[i][j + 1] === 0) board[i][j + 1] = 3;
        }
        if (i - 1 >= 0) {
          if (board[i - 1][j] === 0) board[i - 1][j] = 3;
        }
        if (i + 1 <= index) {
          if (board[i + 1][j] === 0) board[i + 1][j] = 3;
        }
        if (i - 1 >= 0 && j - 1 >= 0) {
          if (board[i - 1][j - 1] === 0) board[i - 1][j - 1] = 3;
        }
        if (i - 1 >= 0 && j + 1 <= index) {
          if (board[i - 1][j + 1] === 0) board[i - 1][j + 1] = 3;
        }
        if (i + 1 <= index && j - 1 >= 0) {
          if (board[i + 1][j - 1] === 0) board[i + 1][j - 1] = 3;
        }
        if (i + 1 <= index && j + 1 <= index) {
          if (board[i + 1][j + 1] === 0) board[i + 1][j + 1] = 3;
        }
      }
    }
  }

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] === 3) danger++;
    }
  }

  return all - danger;
}

// 다른풀이1
// forEach 중첩하여 순회
function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false
        : safezone++;
    })
  );

  return safezone;
}
