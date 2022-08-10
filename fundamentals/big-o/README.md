# Big O

Big O notation is a mathematical notation that describes the limiting behavior of a function when the arguments tends towards a particular value or infinity.

Big O is used to classify algorithms according to how their run time or space requirements grow as the input size grows.

We can compare 2 algorithms using Big O and say which one is better when it comes to scalability regardless of computer differences.

# Time Complexity

Describes the run time requirement grow (Operations/CPU requirement grow) of an algorithm as its input size grow.

### What Causes Time Complexity

- Operations (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call

# Space Complexity

Describes the space requirement grow (Memory requirement grow) of an algorithm as its input size grow.

### What Causes Space Complexity

- Variables
- Data structures
- Function calls
- Allocations

# Rules to calculate Big O

## 1. Worst Case

Big O is always calculated based on the worst case scenario. For example, if you were to search for an element in an array using a linear search it is possible that the element you are looking for is the first element in the array, that would be the **Best Case Scenario** where your algorithm would only take 1 operation. Another option would be for the element you are looking for to be the last element in the array, in which case your algorithm would take N operations where N is equal to the amount of elements in the array, that would be the **Worst Case Scenario**.

Given an array of unordered numbers look for the first number larger than `20`.

```js
function findFirstHigherThanTwenty(array) {
  for (let i = 0; i < array.length; i++) {
    // O(n)
    if (array[i] > 20) {
      return array[i];
    }
  }
  return null;
}

// O(n)
```

If the array happens to not have any number larger than `20` or the only element larger than `20` happens to be the last element we would need to operate through the entire array.

## 2. Remove Constants

Constant values in Big O don't actually affect scalability. `O(100)` is still `O(1)` since the amount of operations doesn't change, yet `O(n/2)` is still `O(n)` because the amount of operations still increases in proportion to the provided input.

```js
function printFirstElementThenHalfArray(array) {
  console.log(array[0]); // O(1)

  const half = array.length / 2;
  // O(n/2)
  for (let i = 0; i < half; i++) {
    console.log(array[i]);
  }
}
// O(n/2 + 1) => O(n/2) => O(n)
```

## 3. Different inputs use Different terms

When calculating Big O, each input should always be treated as a different variable to calculate.

```js
function logBoxes(boxes1, boxes2) {
  boxes1.forEach((box) => console.log(box)); // O(n)
  boxes2.forEach((box) => console.log(box)); // O(m)
}

// O(boxes1 + boxes2) or O(n + m)
```

## 4. Drop Non Dominants

You should always calculate the final Big O of your algorithm using the most dominant term of the operation.

```js
function printArrayThenAllPairs(array) {
  // O(n)
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  // O(n^2)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + "," + array[j]);
    }
  }
}

// O(n + n^2) => O(n^2)
```

\*\* _To calculate space complexity we don’t care about the memory used for the input, just the extra memory used inside the code we are running._

# Notations

## O(1) - Excellent

Constant Time, no matter the amount of elements the number of operations remains the same.

## O(log(n)) - Good

In mathematical analysis a logarithm with base b of a real positive number n, is the exponent x of b to obtain n.

$log_bn = x$ ———> $b^x = n$

$log_{10} 1000 = 3$ ———> $10^3 = 1000$

In programming we use it as `log nodes = steps` and is commonly associated to binary trees. This means in time complexity that the amount of operations to do equals the logarithm of the amount of elements in the tree.

## O(n) - Fair

Linear Time, each extra element increases the number of operations in the same amount (proportionally).

## O(n log n) - Bad

`O(n log n)` means that we are somewhere between `O(n^2)` and `O(n).`

To explain it better it also means that for every element in an array of `n` you need to do a work of size `O(log n)`, which is the equivalent in time complexity of traversing a Balanced Binary Tree from the root to any of its leafs.

In this case the first `n` is due to the number of elements or nodes (in case it is a tree) and `log n` is the depth of the tree or the operation we are doing.

## O(n^2) - Horrible

Quadratic Time, each extra element increases exponentially the number of operations.

## O(2^n) - Horrible

Exponential Time, seen in recursive algorithms that solve a problem of size n.

## O(n!) - Horrible (Oh no)

Factorial Time, every input adds a nested loop. Probably never going to see it, it is the worst time.

# Additional Material

## Common Data Structure Operations

<table>
  <tr>
    <td rowspan="3">Data Structure</td>
    <td colspan="8">Time Complexity</td>
    <td>Space Complexity</td>
  </tr>
  <tr>
    <td colspan="4">Average</td>
    <td colspan="4">Worst</td>
    <td rowspan="2">Worst</td>
  </tr>
  <tr>
    <td>Access</td>
    <td>Search</td>
    <td>Insertion</td>
    <td>Deletion</td>
    <td>Access</td>
    <td>Search</td>
    <td>Insertion</td>
    <td>Deletion</td>
  </tr>
  <tr>
    <td>Array</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Stack</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Queue</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Single Linked List</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Doubly Linked List</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Skip List</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
  </tr>
  <tr>
    <td>Hash Table</td>
    <td style="background-color: #e3e3e3;">N/A</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #53d000;">O(1)</td>
    <td style="background-color: #e3e3e3;">N/A</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Binary Search Tree</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Cartesian Tree</td>
    <td style="background-color: #e3e3e3;">N/A</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #e3e3e3;">N/A</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>B-Tree</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Red-Black Tree</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Splay Tree</td>
    <td style="background-color: #e3e3e3;">N/A</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #e3e3e3;">N/A</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>AVL Tree</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>KD Tree</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
</table>

## Common Array Sorting Algorithms

<table border="1">
  <tr>
    <td rowspan="2">Algorithm</td>
    <td colspan="3">Algorithm</td>
    <td>Algorithm</td>
  </tr>
  <tr>
    <td>excellent</td>
    <td>Average</td>
    <td>Worst</td>
    <td>Worst</td>
  </tr>
  <tr>
    <td>Quicksort</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #ff8989;">O(n^2)</td>
    <td style="background-color: #C8EA00;">O(log(n))</td>
  </tr>
  <tr>
    <td>Mergesort</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Timsort</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Heapsort</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #53d000;">O(1)</td>
  </tr>
  <tr>
    <td>Bubble sort</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ff8989;">O(n^2)</td>
    <td style="background-color: #ff8989;">O(n^2)</td>
    <td style="background-color: #53d000;">O(1)</td>
  </tr>
  <tr>
    <td>Insertion sort</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #ff8989;">O(n^2)</td>
    <td style="background-color: #ff8989;">O(n^2)</td>
    <td style="background-color: #53d000;">O(1)</td>
  </tr>
  <tr>
    <td>Selection sort</td>
    <td style="background-color: #ff8989;">O(n^2)</td>
    <td style="background-color: #ff8989;">O(n^2)</td>
    <td style="background-color: #ff8989;">O(n^2)</td>
    <td style="background-color: #53d000;">O(1)</td>
  </tr>
  <tr>
    <td>Tree sort</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #ff8989;">O(n^2)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Shell sort</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #ff8989;">O(n(log(n))^2)</td>
    <td style="background-color: #ff8989;">O(n(log(n))^2)</td>
    <td style="background-color: #53d000;">O(1)</td>
  </tr>
  <tr>
    <td>Bucket sort</td>
    <td style="background-color: #53d000;">O(n+k)</td>
    <td style="background-color: #53d000;">O(n+k)</td>
    <td style="background-color: #ff8989;">O(n^2)</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
  <tr>
    <td>Radix sort</td>
    <td style="background-color: #53d000;">O(nk)</td>
    <td style="background-color: #53d000;">O(nk)</td>
    <td style="background-color: #53d000;">O(nk)</td>
    <td style="background-color: #ffff00;">O(n+k)</td>
  </tr>
  <tr>
    <td>Counting sort</td>
    <td style="background-color: #53d000;">O(n+k)</td>
    <td style="background-color: #53d000;">O(n+k)</td>
    <td style="background-color: #53d000;">O(n+k)</td>
    <td style="background-color: #ffff00;">O(k)</td>
  </tr>
  <tr>
    <td>Cubesort</td>
    <td style="background-color: #ffff00;">O(n)</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #FFC543;">O(n log(n))</td>
    <td style="background-color: #ffff00;">O(n)</td>
  </tr>
</table>
