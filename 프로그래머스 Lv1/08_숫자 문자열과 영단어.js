function solution(s) {
  let answer = s;
  const numS = [
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

  for (i = 0; i < numS.length; i++) {
    let arr = answer.split(numS[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

// split는 해당 문자 기준으로 나눠서 배열로 만든다. (해당 문자는 제거)
// join은 배열안에 요소 사이에 해당 문자를 넣고 string으로 만든다.
// 따라서 위의 경우 배열안에 2개의 요소가 있고 2개 요소 사이에 join의 i가 들어가기에 원하는 위치(split 해놓은 문자와 문자 사이)에 넣게 된다.
