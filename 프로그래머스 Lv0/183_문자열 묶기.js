function solution(strArr) {
  const arr = strArr.map((v) => v.length).sort((a, b) => a - b);
  const countArr = [0];
  let cur = 1;

  arr.forEach((v) => {
    if (v === cur) {
      countArr[countArr.length - 1]++;
    } else {
      cur = v;
      countArr.push(1);
    }
  });

  return countArr.sort((a, b) => b - a)[0];
}

// 다른풀이1
// new Map
// for of
function solution(strArr) {
  const counter = new Map();
  for (const str of strArr) {
    counter.set(str.length, (counter.get(str.length) || 0) + 1);
  }
  return Math.max(...counter.values());
}

// 다른풀이2
// Array fill
function solution(strArr) {
  let ans = Array(31).fill(0);
  for (let s of strArr) ans[s.length]++;
  return Math.max(...ans);
}

// ----Array와 new Array의 차이----
// 기능적으로 거의 동일하지만, 사용하는 방식에서 약간의 차이가 있습니다.

// Array(): 배열을 생성할 때 new 키워드 없이 호출할 수 있습니다. 자바스크립트의 Array 생성자 함수는 new 없이도 사용할 수 있게 설계되어 있습니다.
// new Array(): new 키워드를 사용하여 명시적으로 배열을 생성합니다. 하지만 new 없이도 Array()로 배열을 만들 수 있기 때문에 현대 자바스크립트에서는 굳이 new를 사용할 필요는 없습니다.

// Array()와 new Array()는 둘 다 배열을 생성하는 방법이며, 둘의 동작 방식은 동일합니다. 자바스크립트에서는 Array 생성자가 특별하게 처리되기 때문에 new 없이도 Array()를 사용할 수 있습니다. 따라서 결과적으로 Array()와 new Array()는 실질적인 차이가 없습니다.

// ----new가 사용된 이유----
// new 키워드는 자바스크립트의 객체 지향 프로그래밍 개념에서 나온 것입니다. new는 생성자 함수와 함께 사용되어 새로운 객체를 생성하고 그 객체의 초기화를 담당합니다. new Array()와 같은 패턴은 자바스크립트의 초기 설계에서 객체 생성 방식을 따랐습니다.

// 자바스크립트가 발전하면서 개발자들이 객체 생성의 복잡성을 줄이고 더 간편한 방식으로 배열을 생성할 수 있도록 하기 위해, Array 생성자 함수는 new 없이도 호출할 수 있도록 설계가 변경되었습니다.

// 현대 자바스크립트에서는 new 없이 배열을 생성하는 방식이 더 일반적입니다. 자바스크립트의 진화 과정에서 코드를 더 간단하고 직관적으로 만들기 위해서 이러한 변화가 도입되었습니다.
