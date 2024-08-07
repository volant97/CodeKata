function solution(name, yearning, photo) {
  const result = [];

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      sum +=
        name.indexOf(photo[i][j]) === -1
          ? 0
          : yearning[name.indexOf(photo[i][j])];
    }
    result.push(sum);
  }

  return result;
}

// 다른풀이1
// reduce안에서는 indexOf로 name에서 해당 사람의 인덱스를 가져온 후, yearning에 데이터로 가져오는 겁니다. 다만 점수 데이터가 없으면 undefined가 반환되므로 0으로 처리하고요. 그걸 합산해서 반환하는거에요.
// "??" 이거는 null 병합 연산자네요. 널 병합 연산자 (??) 는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}
