# Stacks

A stack is a linear data structure. They allow us to traverse elements sequentially (1 by 1) and only one element can be reached at a time. The main difference between stacks and arrays is how elements get removed, unlike an array in stacks there is not random access operations.

Stacks have a structure known as LIFO (Last In First Out), that means that to access an element of the stack we first have to access all the elements that where stored after the element that you want to get.

Stacks are very important in language specific engines. Most programming languages are modeled with the stack architecture in mind.

### Operations

lookup `O(n)`, pop `O(1)`, push `O(1)`, peek `O(1)`.

- [Stack Implementation](stack.js)
- [Stack Implementation using Linked Lists](stackWithLinkedList.js)
