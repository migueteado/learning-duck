/**
 * Given an array of n > 0 numbers,
 * rotate each element k positions and return the rotated array.
 */

/* Accepted
 ** Runtime 156 ms - better than 27.54% of Javascript submissions
 ** Memory 52.7 MB - Better than 33.35% of Javascript submissions
 */
const rotate = (nums, k) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    let index = i + k;
    while (index > nums.length - 1) {
      index = index - nums.length;
    }
    hash[index] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = hash[i];
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [ 5, 6, 7, 1, 2, 3, 4 ]
console.log(rotate([-1, -100, 3, 99], 2)); // [ 3, 99, -1, -100 ]
console.log(rotate([-1], 2)); // [-1]
