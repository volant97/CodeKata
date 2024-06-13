function solution(numlist, n) {
  const arr = numlist
    .sort((a, b) => a - b)
    .map((a) => {
      return [a, Math.abs(a - n)];
    })
    .sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < arr.length - 1; i++) {
    console.log();
    const arr1 = arr[i][0];
    const arr2 = arr[i + 1][0];
    if (arr[i][1] === arr[i + 1][1] && arr1 < arr2) {
      arr[i][0] = arr2;
      arr[i + 1][0] = arr1;
    }
  }

  return arr.map((a) => a[0]);
}

// 다른풀이1
// or 연산자는 앞에 위치한 피연산자의 불린값을 따져서 false가 나오는 경우에만 다음 피연산자로 넘어가고
// true일 경우 연산을 멈추고 원래 값을 반환합니다.
// 따라서 이 코드에서는 Math.abs(a - n) - Math.abs(b - n) 에서
// 값이 0(불린 값 판정으로 false)이 나오기 전까진 앞의 로직만 실행되므로
// 절대값의 차이가 나는 경우 내림차순 정렬,
// 절대값 차이가 나지 않는 같은 값일 경우에는 기존값을 기준으로 비교(b-a)하여 오름차순 정렬이 실행됩니다.
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
