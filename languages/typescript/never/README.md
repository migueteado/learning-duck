# Never

Is used to identify functions that will never finish their execution. This type help TypeScript understand that a function will never finish executing but will keep comsuming resources, in these cases TS will kill the process.

```ts
// const withoutEnd: () => never
const withoutEnd = () => {
  while (true) {
    console.log("Never stop learning!");
  }
};

// const executionFail: () => never
const executionFail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === "string") {
    return "Is a string";
  } else if (Array.isArray(input)) {
    return "Is an array";
  }

  return executionFail("Didn't match");
};
```
