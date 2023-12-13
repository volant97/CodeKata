// 행렬의 덧셈

function solution(arr1, arr2) {
  let answer = [];
  for (i = 0; i < arr1.length; i++) {
    let sum = [];
    for (a = 0; a < arr1[i].length; a++) {
      sum.push(arr1[i][a] + arr2[i][a]);
    }
    answer.push(sum);
  }
  return answer;
}

// 다른 풀이 1
// function sumMatrix(A,B){
//   return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
// }

// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))

// 체크 - map의 인자 또한 map 가능

// 예를 들어 arr1 = [[1,2],[2,3]]이고, arr2 = [[3,4],[5,6]]일 때 arr1을 맵핑을 시작합니다(같은 크기라 누구한테 맵핑해도 상관없음).
// arr1을 맵핑을 하면 첫 번째 인자로 v = [1,2]가 올거에요.
// 그리고 인덱스는 i = 0인 상태입니다. 이 상태에서 [1,2]을 다시 맵핑합니다
// 그 이유는 [1,2]의 인덱스 값을 써야하기 때문이에요.
// 아무튼 [1,2]를 맵핑하면 v= [1,2], i = 0인 상태에 새로운 v2= 1, 인덱스 j = 0이 추가됩니다.
// 여기서 j는 [1,2]의 인덱스 만큼 돌기 때문에 j = 1까지 커질 수 있습니다.
// 그래서 최종 코드가 arr1.map((v, i) => v.map((v2, j) => v2 + arr2[i][j])); 되는거에요.
// 첫 맵핑에 4,6이 나올겁니다.
// j가 1까지 커졌으니 다시 arr1의 두번째 맵핑을 합니다. [2,3]이겠죠?
// [2,3]을 위의 풀이를 반복합니다
