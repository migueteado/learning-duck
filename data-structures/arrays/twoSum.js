/**
 * Given an array of n elements, all numbers, and a target, return the indexes of
 * the first pair of elements that can add up to the target value.
 * All cases have at least one solution.
 */

/* Accepted
 ** Runtime 86 ms - better than 78.76% of Javascript submissions
 ** Memory 42.5 MB - Better than 58.36% of Javascript submissions
 */
function twoSum(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] > -1) {
      return [hash[target - nums[i]], i];
    } else if (!hash[nums[i]]) {
      hash[nums[i]] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
