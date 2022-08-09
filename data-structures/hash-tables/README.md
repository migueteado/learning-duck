# Hash Tables

Hash tables are key-value structures. They offer faster operations but also require more memory.

```js
// In Javascript objects are a type of hash table
let hash = {
  a: 1,
  b: 5,
  c: 6,
};
```

JavaScript already has Map() and Set() to handle hash tables, but to understand better how it works we will create our own implementation.

[Implementation](hashTable.js)

### Operations

lookup `O(1)`, search `O(1)`, insert `O(1)`, delete `O(1)`.

```js
let hash = {
  a: 1,
  b: 5,
  c: 6,
};

console.log(hash["a"]); // 1
hash["d"] = 10;
delete hash["c"];
```

# Pros & Cons

### Pros

Fast lookups, fast inserts, flexible keys (good collision resolution needed).

### Cons

Unordered, slow key iteration.

## Hash Function

Is a function that gives a response of fixed length for each input that it gets. Hash functions are idempotent, which means that a given input will always return the same output. A hashing function is the one designated to decide the memory slot where to store the data and we assume it has a Big O notation of `O(1)` .

\*\* _MD5 and SHA-265 are examples of hashing functions_

## Hash Collisions

When the amount of data to store is big enough a hash collision happens, this means that the hash function is trying to store two values in the same memory slot. This is good to know but is usually not a problem when working with high level languages. This is handled in many different ways, like creating a linked list called Separate chaining. Other options are Open addressing and Robin Hood hashing.

# Exercises

- [First Recurring Character](firstRecurringCharacter.js)
