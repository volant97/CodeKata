// 오류 : b의 값을 대입하지 않았음
// 분석 : 빈 병을 가져가면 *b의 값으로 newCoke를 받아야하는데 기존에는 1개로 고정되어 있었음
// 해결 : newCoke * b
function solution(a, b, n) {
  let result = 0;

  for (let i = 0; i < i + 1; i++) {
    let exchangeBottle = n % a === 0 ? n : Math.floor(n / a) * a;
    let newCoke = exchangeBottle / a;

    if (n >= a) {
      n = n - exchangeBottle + newCoke * b;
      result += newCoke * b;
    } else {
      break;
    }
  }

  return result;
}

// 다른풀이1
// 결국 a를 주고 b를 돌려받는다 했을 때 한번 교환했을 때 a - b만큼 없어지는 거잖아요 처음이 9병이고 a:3, b:1라 하면 결국 3병을 교환하고 1병을 받으니 a - b를 하면 2병씩 없어지는거니까 n / (a - b) 를 해주면 몇번째에 n이 0이 되는지 알 수 있습니다
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;

// 다른풀이2
function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    result += Math.floor(n / a) * b;
    n = (n % a) + Math.floor(n / a) * b;
  }

  return result;
}
