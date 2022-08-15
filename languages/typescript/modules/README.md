# TypeScript Modules

TypeScript is intended to work with JavaScript Modules or ES6 Modules using `import` and `export` instead of the `require` reserved word.

```ts
/* product.model.ts */

export type Sizes = "S" | "M" | "L" | "XL";
export type Product = {
  name: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
```

```ts
/* product.service.ts */

import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product): void => {
  products.push(data);
};

export const calculateStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
};
```

```ts
/* main.ts */

import { addProduct, calculateStock, products } from "./product.service";

addProduct({
  title: "P1",
  createdAt: new Date(),
  stock: 19,
  size: "S",
});

console.log(products);
```
