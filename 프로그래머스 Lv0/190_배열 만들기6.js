function solution(arr) {
  let i = 0;
  const stk = [];

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else {
      if (stk[stk.length - 1] === arr[i]) {
        stk.pop();
      } else {
        stk.push(arr[i]);
      }
    }
    i++;
  }

  return stk.length ? stk : [-1];
}

// 다른풀이1
// pop() === splice(-1)
function solution(arr) {
  let stk = [];
  arr.forEach((x, i) => {
    if (x !== stk[stk.length - 1]) {
      stk.push(x);
    } else {
      stk.splice(-1);
    }
    //console.log("배열 추가 삭제 진행과정 : ",stk)
  });

  if (stk.length == 0) {
    stk = [-1];
  }
  return stk;
}

// 다른풀이2
function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result[result.length - 1] == arr[i]) {
      result.pop();
    } else {
      result.push(arr[i]);
    }
  }

  return result.length !== 0 ? result : [-1];
}
