# Trees

A data structure with a hierarchical structure.

The structure of the tree starts with a Root Node, every Node can have Child Node.

When a node doesn’t have child node is called a Leaf, when it has a child is called a Parent Node and if two or more nodes share the same parent they are called Siblings.

### Operations

lookup `O(log n)`, insert `O(log n)`, delete `O(log n)`.

- [Tree Implementation](tree.js)

### Perfect Binary Tree

All the nodes are filled, each subsequent level of nodes doubles the previous one.

The number of nodes on the last level equals the number of nodes at the last level equals the sum of the rest of the nodes plus 1.

### Full Binary Tree

Every node has 0 or 2 children, never 1.

# Types

## Binary Search Tree

### Balanced vs Unbalanced

An unbalanced binary search tree is bad because it will basically become a Linked List.

Balanced: lookup `O(log n)`, insert `O(log n)`, delete `O(log n)`.

Unbalanced: lookup `O(n)`, insert `O(n)`, delete `O(n)`.

## AVL Tree (Adelson-Velsky and Landis)

Is a self balancing binary search tree. In a AVL tree the heights of the two child subtrees of any node differ at most one; if at any time they differ by more than one, rebalancing is done to restore this property. Lookup, insertion and deletion all take `O(log n)` time in both the average and worst cases.

## Red Black Tree

Is a type of self balancing binary search tree that adheres to a strict set of rules in order to maintain a logarithmic time complexity.

- Each node must be either RED or BLACK
- The root of the tree must always be BLACK
- Two RED nodes can never appear in a row within the tree; a RED node must always have a BLACK parent node, and BLACK child nodes.
- Every branch path from the root node in the tree to a NULL pointer passes through the exact same number of BLACK nodes (this is also an unsuccessful search path, a path that we would take to find a node that didn’t exists).

# Pros & Cons

### Pros

Most operations are better than O(n). they are ordered and have a flexible size.

### Cons

Don’t have O(1). They aren’t the fastest at anything but have certain operations where they will outperform other data structures.

# Binary Heap

In a binary heap the root node is the one with the higher value (Max Heap) or is the node with the lowest value (Min Heap).

It is commonly used for priority queues, data storage and sorting algorithms.

Different from binary trees there is no specific relationship between the left node and the right node.

\*\* _It is not related to memory heaps._

### Operations

Lookup `O(n)`, insert `O(log n)`, delete `O(log n)`.

## Priority Queues

When elements that arrived late have a higher value in the memory heap they go up, this is useful for priority queues such as an emergency room where you have to prioritize and take care of the patients that are in a more delicate situation.

# Trie

A trie is a specialized Tree used for searches. In most cases it can outperform other data structures depending on the type of search.

It allows us to know if a word exists in a body of text.

Tries can have multiple children.

It is used for autocompletion, searching words in a dictionary, IP routing or making suggestions when using search engines.
