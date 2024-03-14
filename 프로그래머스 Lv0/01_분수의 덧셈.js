function solution(n1, d1, n2, d2) {
  // 최대공약수 구하는 방법 숙지
  const cal_gcd = (a, b) => {
    return a % b === 0 ? b : cal_gcd(b, a % b);
  };

  let num = n1 * d2 + n2 * d1;
  let den = d1 * d2;
  let gcd = cal_gcd(num, den);

  // 최대 공약수를 분자 분모에 나누고 배열에 넣기
  return [num / gcd, den / gcd];
}
