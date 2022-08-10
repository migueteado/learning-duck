/**
 * Given an array of n elements,
 * return true if there is any duplicate element,
 * otherwise return false.
 */

/* Accepted
 ** Runtime 115 ms - better than 65.57% of Javascript submissions
 ** Memory 51.1 MB - Better than 44.88% of Javascript submissions
 */
const containsDuplicate = (nums) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
