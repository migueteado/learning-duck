# Functions

When working with functions TS becomes very handly.

```ts
type Sizes: "S" | "M" | "L" | "XL";

function createProductJson(
  title: string,
  createdAt: Date,
  stock: number,
  size: Sizes
) {
  return {
    title,
    createdAt,
    stock,
    size,
  };
}

// If not all the parameters are provided it will show an error.
const product1 = createProductJson("P1", new Date(), 12, "XL")
```

With Arrow Functions. Very common since the previos example has issues referencing to `this`.

```ts
type Sizes: "S" | "M" | "L" | "XL";

const createProductJson = (
  title: string,
  createdAt: Date,
  stock: number,
  size: Sizes
) => {
  return {
    title,
    createdAt,
    stock,
    size,
  };
}

const product1 = createProductJson("P1", new Date(), 12, "XL")
```

### Passing objects

```ts
const login = (data: { email: string; password: string }) => {
  console.log(data.email, data.password);
};

login({
  email: "you@example.com",
  password: "supersecretpassword",
});
```

We can also directly access the object properties.

```ts
const login = ({ email: string; password: string }) => {
  console.log(data.email, data.password);
};

login({
  email: "you@example.com",
  password: "supersecretpassword",
});
```

## Optional Parameters

Tells the TS engine that a variable may not be provided.

```ts
type Sizes: "S" | "M" | "L" | "XL";

const createProductJson = (
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
) => {
  return {
    title,
    createdAt,
    stock,
    size,
  };
}

// It won't show an error since size is optional
const product1 = createProductJson("P1", new Date(), 12)
```

## Default Parameters

Will assign a default value to the specified variable in case it is not provided.

```ts
const createProduct = (
  id: string | number,
  stock: number = 10,
  isNew: boolean = true
) => {
  return {
    id,
    stock,
    isNew,
  };
};

const product1 = createProduct(1);
console.log(product1); // { id: 1, stock: 10, isNew: true }
```

## Rest Parameters

The rest parameter syntex allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

```ts
function sum(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10
```

# Overload

We can specify that a function return can have different types under different circumstances, this is called overload.

```ts
type CustomType = string | string[];

// This will tell TS what to expect for each case
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

// This is the function that will be executed
export function parseStr(input: CustomType): CustomType {
  if (Array.isArray(input)) {
    return input.join("");
  } else {
    return input.split("");
  }
}
```

### Good Practices

Always leave the unknown case at the end.

```ts
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: unknown): unknown;
var myElement: HTMLDivElement;
var x = fn(myElement); // x: string
```
