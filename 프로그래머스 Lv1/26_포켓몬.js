function solution(nums) {
  const maxNum = nums.length / 2;
  const a = nums
    .sort((a, b) => a - b)
    .filter((v, i) => nums[i - 1] !== v).length;
  return maxNum >= a ? a : maxNum;
}

// 다른풀이1
// new Set
// 속도 측면에서 매우 빠름
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
