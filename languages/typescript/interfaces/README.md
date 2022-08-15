# Interfaces

Interfaces are another way to name an object type.

```ts
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

## Inheritance

Interfaces are extendable. This means that we can use the keyword `extends` to include the properties of an interface to another.

```ts
interface BaseModel {
  id: string | number;
  createdAt: Date;
  updatedAt: Date;
}

interface UserModel extends BaseModel {
  firstName: string;
  lastName: string;
  username: string;
}

interface CategoryModel extends BaseModel {
  name: string;
}
```

## Interfaces vs Types

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. The key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

Both can be extended.

```ts
// Interfaces
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// Types
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};
```

Only interfaces can be modified after created.

```ts
// Interfaces
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

// Types
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

// Error: Duplicate identifier 'Window'.
```

## Readonly properties

The readonly property specifies that a property of an object can only be read but not modified.

```ts
interface BaseModel {
  readonly id: string | number;
  createdAt: Date;
  updatedAt: Date;
}
```
