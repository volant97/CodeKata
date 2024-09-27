function solution(board, k) {
  let result = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (i + j <= k) result += board[i][j];
    }
  }

  return result;
}

// 다른풀이1
function solution(board, k) {
  return board.reduce(
    (total, row, i) =>
      total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
    0
  );
}
