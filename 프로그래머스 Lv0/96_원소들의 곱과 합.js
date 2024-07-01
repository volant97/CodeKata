function solution(num_list) {
  let mul = 1;
  let plu = 0;

  num_list.forEach((i) => {
    mul *= i;
    plu += i;
  });

  plu **= 2;

  return mul < plu ? 1 : 0;
}
