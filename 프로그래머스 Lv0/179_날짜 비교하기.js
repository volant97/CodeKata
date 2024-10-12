function solution(date1, date2) {
  if (date1[0] < date2[0]) {
    return 1;
  } else if (date1[0] > date2[0]) {
    return 0;
  }

  if (date1[1] < date2[1]) {
    return 1;
  } else if (date1[1] > date2[1]) {
    return 0;
  }

  if (date1[2] < date2[2]) {
    return 1;
  } else if (date1[2] >= date2[2]) {
    return 0;
  }
}

// 다른풀이1
// new Date
const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);
