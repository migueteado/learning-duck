# Unknown

Is the improved version of `any`, remember that `any` is an anti-pattern that we should not use. It express that we don't know the type of a variable.

It is better than `any` because it provides the flexibility of `any` without completely removing the TS engine type verification. Unknown forces us to do a type verification.

```ts
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

// This will run without problems with any
let isBoolean: boolean = anyVar;

// This too
anyVar.doSomething();
```

But using `unknown`.

```ts
let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// This will cause an error
anyVar.doSomething();

// No problem
if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}
```

**Use `unknown` instead of `any`**.
