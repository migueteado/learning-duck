# ReadonlyArray

This is an special array that cannot be modified.

```ts
const normalArray: number[] = [1, 2, 3, 4, 5];
normalArray.push(9);
normalArray.pop();
normalArray.unshift(1);

// You can't mutate this array
const readonlyArray: ReadonlyArray<number> = [1, 2, 3, 4, 5];
```
