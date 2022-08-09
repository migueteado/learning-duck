/**
 * Given an array of n elements,
 * return the first recurrent element in the array,
 * if there are no recurrent elements return undefined.
 */

const firstRecurrentCharacter = (array) => {
  const hash = {};
  for (let i = 0; i < array.length; i++) {
    if (hash[array[i]]) {
      return array[i];
    } else {
      hash[array[i]] = true;
    }
  }
  return undefined;
};

console.log(firstRecurrentCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurrentCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(firstRecurrentCharacter([2, 3, 4, 5])); // undefined
