// 숫자 → 이진수 : --.toString(2)  여기서 -- 타입은 number "5"
// 이진수 → 숫자 : parseInt(--, 2)  여기서 -- 타입은 string "101"
function solution(bin1, bin2) {
  const sum1 = parseInt(bin1, 2);
  const sum2 = parseInt(bin2, 2);
  const sum = sum1 + sum2;
  const result = sum.toString(2);

  return result;
}

// 다른풀이1
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

// 다른풀이2
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  temp = [...temp.toString()].reverse().map((v) => +v);

  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join("")).toString();
}
