# Arrays

Sometimes called Lists organizes items sequentially, that means one after another in memory. Simple and most wildly use data structure.

Arrays are stored in contiguous memory (in order) and have the smallest footprint of any data structure. Is the best choice if you want to iterate elements one by one.

### Operations

lookup `O(1)`, push `O(1)`, insert `O(n)`, delete `O(n)`.

```js
const strings = ["a", "b", "c"];

/* The computer already knows where is the variable we are asking for
 ** It only needs to access the space in memory O(1)
 */
console.log(strings[2]);

/* Adds an element at the end of the array
 ** selects the space in memory and inserts O(1)
 */
strings.push("d");

/* Removes last element from the array
 ** clears the space in memory that had the last element O(1)
 */
strings.pop("d");

/* Removes / Adds the first element of the array
 ** has to rearrange the rest of the elements in the array O(n)
 */
strings.shift();
strings.unshift("x");

/* Removes / Replaces n amount of elements from the array
 ** has to rearrange the rest of the elements in the array O(n)
 */
strings.splice(2, 0, "alien");
```

# Types

## Static Arrays

Have a fixed size and must be specified at declaration. Usual for lower level languages that require to handle memory.

```c++
// C++

// Specifies the space required for the array in advance.
int a[20];
int b[5] {1, 2, 3, 4, 5};
```

## Dynamic Arrays

Allows to copy and rearrange array data in a different location. This allows us to add more items. Common for high level languages that manage memory under the hood.

```js
// Javascript

const strings = ["a", "b", "c", "d"];

// If we add a new element to the array
strings.push("e");

// JS engine will loop through all the elements in the array
// to copy them in a new location (usually looking to double up the space)
// so that we can store the new element and keep adding new elements
// making the operation O(n)
console.log(strings); // ["a", "b", "c", "d", "e"]
```

\*\* _Knowing what is happening underneath the hood can sometimes change your perspective of an operation._

# Pros & Cons

### Pros

Fast lookups, Fast push/pop, Ordered.

### Cons

Slow inserts, slow deletes, fixed size (if using static array).

# String & Arrays

Remember that strings are arrays of characters, if you are asked array question during an interview thread them as string questions.

```js
const string = "Hola soy miguel";

// Reverse a string
function reverse1(string) {
  let stringResult = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringResult += string[i];
  }
  return stringResult;
}

// Second try ES6
const reverse2 = (string) => string.split("").reverse().join("");

// Third try ES6
const reverse3 = (string) => [...string].reverse().join("");

console.log(reverse1(string)); // leugim yos aloH
console.log(reverse2(string)); // leugim yos aloH
console.log(reverse3(string)); // leugim yos aloH
```

# Exercises

- [Merge Sorted Array](mergeSorted.js)
- [Two Sum](twoSum.js)
- [Maximum Subarray](maxSubArray.js)
- [Move Zeroes](moveZeroes.js)
- [Contains Duplicate](containsDuplicate.js)
- [Rotate Array](rotate.js)
- [Longest Word](longestWord.js)
