function solution(emergency) {
  const eme = [...emergency];
  const arr = [...emergency.sort((a, b) => b - a)];

  for (let i = 0; i < eme.length; i++) {
    for (let j = 0; i < arr.length; j++) {
      if (eme[i] === arr[j]) {
        eme[i] = j + 1;
        break;
      }
    }
  }

  return eme;
}

// 다른풀이1
// 처음 생각한 indexOf와 map을 활용한 풀이
// sort는 기존 배열을 변경하여 요소를 정렬시킵니다. slice는 emergency배열을 변경하지 않고 새로운 배열을 할당해주는 역할을 합니다. === [...emergency]로도 가능
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
