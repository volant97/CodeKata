function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
      } else {
        stk.pop();
        i--;
      }
    }
  }

  return stk;
}

// 다른풀이1
// i++을 하면서 arr[i] 값을 적용
// i++는 후위 연산자로, 먼저 arr[i]를 가져오고 나서 i를 증가시키기 때문에 다음과 같은 순서로 진행됨
// 1. arr[i]의 값이 stk.push()로 추가
// 2. 이후 i가 1 증가
function solution(arr) {
  var stk = [];
  for (let i = 0; i < arr.length; ) {
    if (stk.length === 0) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }
  return stk;
}
