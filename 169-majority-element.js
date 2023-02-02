function majorityElement(nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      // increament
      map[nums[i]]++;
    } else {
      // add
      map[nums[i]] = 1;
    }

    if (map[nums[i]] >= nums.length / 2) {
      return nums[i];
    }
  }
}

console.log(majorityElement([3, 2, 1, 3])); // 3
