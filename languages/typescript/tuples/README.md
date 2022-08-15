# Tuples

Tuples help us create strongly typed arrays specifying the type, position and amount of elements.

```ts
// Normal array
const prices: (number | string)[] = [1, 3, 2, "as"];

// Tuple
const user: [string, number, boolean] = ["soymvillalobos", 15, true];

// Destructuring a tuple
const [username, age] = user;

console.log(username); // soymvillalobos
console.log(age); // 15
```

Adding more elements, or the elements in a different order will produce a TS error.

Why would someone ever use a Tuple?

Lets start by saying that the `useState` hook in react uses a tuple:

```ts
const [state, setState] = useState(initialState);
```

- Tuples are fined size, we can't add/delete elements to/from a tuple.
- Tuples are more memory efficient than lists (they are faster).
- Tuples can be used as dictionary keys for constant values to use in our application.
