# Types

TypeScript adds strong typing to JavaScript syntax, helping its engine understand your code better and prevent errors as you are writing your code. You will start seeing things like this:

```ts
const example: string = "This is an example";

function logIt(message: string): void {
  console.log(message);
}
```

There are two ways your TS engine can help you prevent erros using types:

- Inferred types:

```ts
// It infers the type of the variable you created
// based on its assignation
const example = "This is a string";
```

- Explicit types:

```ts
// You can explicitly tell the type of variable
// to help the engine, this can be useful in a lot of cases
const example: string = "This is a string";
```

TypesScript has all the primitive types and you can also create your own data structures using them, but first lets see the primitive types.

## Primitive Types

### Numbers

The primitive type for numbers is `number`, remember that is not the same as `Number` which is a JavaScript object structure, a primitive `number` is just a variable that contains a numeric value.

```ts
const n: number = 89;
```

### Booleans

Similar to numbers this type is `boolean` and not `Boolean` which refers to a boolean object, it specifies that a variable can only contain a boolean value.

```ts
const bool: boolean = false;
```

### Strings

In this case the primitive type is `string` which also has an Object type in JavaScript that can be found as `String`, remember that primitive types and object types are different.

```ts
const text: string = "This is some text";
```

### Null

In both JavaScript and TypeScript `null` is an specified type and it differs from a value that has not been provided, in these languages if a function returns null it is because it was told to do so.

```ts
const myNull: null = null;
```

### Undefined

Different from `null`, this type of variable is normally used when an value has not been provided, it is the default value for an unasigned variable.

```ts
const myUndefined;

// In TS this will display an error because myUndefined
// has not been assigned. Yet in JS it will run and show undefined.
console.log(myUndefined); // undefined
```

### Arrays

It differs from the `Array` object of JavaScript, you can specify an Array of primitives using the following structure:

```ts
// An array of primitives, in this case strings
const arrayOfStrings: string[] = ["apple", "pear", "peach"];

// An array of different types of primitives
const crazyArray: (string | number | boolean)[] = [9, true, "hi"];
```

## Special Cases

### Dates

Different from the previous cases, for date usage and manipulation TS directly uses the JS `Date` object type.

```ts
const date: Date = new Date();
```

## TypeScript Specific Types

### Any (The BIG DON'T)

This variable type can be referenced as `any` which means that can contain any type of value, it is basically a way to not use TypeScript advantages but can be useful in some cases.

```ts
// This will compile succesfully
const variable: any;
variable = 9;
variable = true;
variable = "some text";
```

Any is the biggest anti-pattern of TypeScript, when you are working in a well developed project the type `any` is usually forbidden. Yer `any` can be useful when implementing TypeScript in a JavaScript project incrementally (at some point you will have to replace it with the right type).

Any is usually returned sometimes by non-types libraries.

**Please don't use any**.

### Void

This type of value is usually implemented on functions, it specifies that the function will not return a value.

```ts
function logIt(message: string): void {
  console.log(message);
}
```

### Union Types

Is a way to explicitly tell TS to use different types on the same variable.

```ts
let weird: string | number;
weird = "some text";
weird = 0;
```

### Aliases

An alias in TS is a way to specify your own types, you can do it using the reserved word `type`.

```ts
type UserId = string | null;

function greeting(userId: UserId) {
  if (typeof userId === "string") {
    console.log(`string ${userId.toLowerCase()}`);
  }
}
```

### Literal Types

Specifies a group of values that can be assigned to a variable.

```ts
// Directly
let sizes: "S" | "M" | "L" | "XL";

// With Literal types
type Sizes: "S" | "M" | "L" | "XL";
let sizes: Sizes = "S";
```

# Casting Types

We can specify how you want to treat an specific variable with type casting.

```ts
const username = user.username as string;
```

# Creating Object Types

TypeScript provides tooling to create your own data structures such as objects.

```ts
type Sizes: "S" | "M" | "L" | "XL";

type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
};

const products: Product[] = []

const addProduct = (product: Product) => {
  products.push(product);
}

addProduct({
  title: "P1",
  createdAt: new Date(),
  stock: 19,
  size: "S",
});
```
