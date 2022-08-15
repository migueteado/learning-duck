# TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript.

- TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
- TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.
- TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

# Compiler

Typescript uses a compiler to translate TypeScript code into JavaScript. You can use the compiler with the command:

```bash
$ npx tsc --target es6
```

It receives a wide range of inputs.

# TSConfig

Instead of directly using the compiler and passing the inputs we can create a `tsconfig.json` file to tell all of this information directly to the compiler. To create a tsconfig.json file run this command:

```bash
$ npx tsc --init
```

# Contents

### Fundamentals

1. [Types](./types/)
2. [Operators](./operators/)
3. [Functions](./functions/)
4. [Modules](./modules/)
5. [Libraries](./libraries/)

### Advanced

6. [TS-Node](./ts-node/)
7. [Enums](./enums/)
8. [Tuples](./tuples/)
9. [Unknown](./unknown/)
10. [Never](./never/)
11. [Interfaces](./interfaces/)
12. [Utility Types](./utility-types/)
13. [Access type by index](./access-types/)
14. [ReadonlyArray](./readonly-array/)
