# Queues

A queue is a linear data structure. They allow us to traverse elements sequentially (1 by 1) and only one element can be reached at a time. The main difference between queues and arrays is how elements get removed, unlike an array in queues there is not random access operations.

Queues have a structure known as FIFO (First In First Out). Queues are used a lot in programming, for example if you have a waitlist app.

### Operations

lookup `O(n)`, enqueue `O(1)`, dequeue `O(1)`, peek `O(1)`.

\*\* _Creating Queues using arrays is very bad since the unshift method that we would use a lot has a Big O notation of `O(n)`._

- [Queue Implementation](queue.js)
- [Queue Implementation using Stacks](queueWithStacks.js)
