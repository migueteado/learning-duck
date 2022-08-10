/**
 * Given an array of n elements, move all the elements that equals to 0 to the end of the array.
 * Return the modified array.
 */

/* Accepted
 ** Runtime 139 ms - better than 43.77% of Javascript submissions
 ** Memory 46.3 MB - Better than 83.68% of Javascript submissions
 */
const moveZeroes = (nums) => {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lastNonZeroFoundAt++] = nums[i];
    }
  }
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [ 1, 3, 12, 0, 0 ]
console.log(moveZeroes([0])); // [0]
