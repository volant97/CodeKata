// 서울에서 김서방 찾기

const solution = (seoul) => {
 const answer = seoul.findIndex(item=>item === "Kim")
  return `김서방은 ${answer}에 있다`
 }

console.log(solution(["Jane", "Kim"]));  // "김서방은 1에 있다"



// 다른 풀이 1
// const solution = (seoul) => `김서방은 ${seoul.findIndex(item => item === 'Kim')}에 있다`;

// 다른 풀이 2
// function findKim(seoul){
//   var idx = seoul.indexOf('Kim');

//   return "김서방은 " + idx + "에 있다";
// }

// 두 코드 모두 같은 결과를 반환하지만, 
// 코드 스타일과 개발자의 개인적인 취향에 따라 다르게 선택할 수 있습니다. 
// findIndex 메소드를 사용한 첫 번째 코드는 새로운 ES6+ 문법을 활용한 현대적인 방식으로 구현되었습니다. 
// findIndex 메소드는 콜백 함수를 이용하여 배열에서 첫 번째로 발견되는 요소의 인덱스를 반환합니다. 
// 두 번째 코드는 기본적인 indexOf 메소드를 사용하여 문자열에서 "Kim" 문자열을 찾은 다음, 해당 인덱스를 반환합니다. 
// 따라서, 두 코드 중 더 나은 코드는 개발자의 취향에 따라 다를 수 있습니다. 
// 그러나, 첫 번째 코드는 더욱 현대적이고 선언적으로 코드를 작성할 수 있기 때문에, 일반적으로 더욱 추천되는 방식입니다.


// 제출