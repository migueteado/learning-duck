# Operators

### Optional chaining

It tells TS to verify is a value exists before doing an operation, it will return if the verified value is `null` or `undefined`. It is different from `|| (Logical OR)` which would consider any falsy value.

```ts
type Name = string | null;

const greeting = (name: Name) => {
  let greet = "Hello! My name is ";
  greet += name?.toLowerCase() || "nobody";
  console.log(greet);
};
```

### Nullish Coalescing Operator (??)

If the value to the left is `null` or `undefined` it will point to the value to the right, otherwise it will point to the value to the left.

It differs from the `|| (Logical OR)` operator which would work for any falsy value, the nullish coalescing operator will only have that behavior with `null` and `undefined`.

This is implemented in JavaScript.

```ts
type Sizes: "S" | "M" | "L" | "XL";

const createProductJson = (
  title: string,
  createdAt: Date,
  stock?: number,
  size?: Sizes
) => {
  return {
    title,
    createdAt,
    stock: stock ?? 0,
    size,
  };
}

// It won't show an error since size is optional
const product1 = createProductJson("P1", new Date(), 12)
```
