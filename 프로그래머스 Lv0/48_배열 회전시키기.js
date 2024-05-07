// pop : 맨뒤 제거
// push : 맨뒤에 추가
// shift : 맨앞 제거
// unshift : 맨앞에 추가
function solution(numbers, direction) {
  const result = [...numbers];

  if (direction === "right") {
    result.pop();
    result.unshift(numbers[numbers.length - 1]);
  } else {
    result.shift();
    result.push(numbers[0]);
  }

  return result;
}

// 다른풀이1
// 배열 복사 하지 않고 바로 적용. but 코테말고 프로그램에서는 배열을 복사하는 것이 좋다
function solution(numbers, direction) {
  var answer = [];

  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  answer = numbers;

  return answer;
}
