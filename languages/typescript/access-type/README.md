# Access Type by Index

In TypeScript we can access a value type using its index.

```ts
interface Human {
  name: string;
  age: number;
  isAlien: boolean;
}

function createHuman(name: Human["name"]) {
  // code
}
```
