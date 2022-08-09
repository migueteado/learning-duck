# Graphs

One of the most useful and used data structure in Computer Science when it comes to modelling real life structures.

Is simply a set of values that are related, they usually look like a little network.

In a graph a Node is called Vertex and are connected with Edges.

Are ideal when you are working with things that connect to other things.

- Facebook uses it for social network.
- Amazon uses it for recommendation engines.
- Google uses it to determine the shortest paths in google maps.

# Types

### Directed

Are only connected in one direction, for example in twitter if you follow someone that doesn’t necessary mean they follow you.

### Undirected

Are connected in both ways, for example in facebook if you have a friend it is a bidirectional connection.

### Weighted

Graph can have information in the connections (edges), for example length. This is used a lot to calculate optimal paths.

### Unweighted

Don’t have information in the edges.

### Cyclic

This happen when the nodes are connected in a way that by circulating through them you can go back to the first one, in other words it is a circular relationship.

### Acyclic

In this case nodes are connected in a direct path.

# Pros & Cons

### Pros

Really good for handling relationships.

### Cons

Hard for scalability.

# Graph Implementation

There are many ways to implement a graph, some examples are:

```js
// Edge List - A list that represents the conections between the nodes.
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List - Ths index represents the node, and the values represent its connections.
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix - Each row represents a node and each row represents a connection where
// 0 is no and 1 is yes.
const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

// Object version
const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
```

- [Graph Implementation](graph.js)
