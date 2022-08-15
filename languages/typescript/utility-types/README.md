# Utility Types

Utility types are standard types that let us make operations over types and interfaces to create new types and operations.

Our example.

```ts
interface Product {
  id: string | number;
  name: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
```

## Omit

Lets us create a new type/interface omiting fields from another.

```ts
type CreateProductDto = Omit<Product, "id" | "createdAt">;

// Advantage of interfaces, can include new properties on same operation
interface CreateProductDto
  extends Omit<Product, "id" | "createdAt" | "updatedAt"> {
  categoryId: string;
}

// Result:
interface CreateProductDto {
  name: string;
  stock: number;
  categoryId: string;
}
```

## Pick

Lets us create a new type/interface picking the properties from another.

```ts
type CreateProductDto = Pick<Product, "name" | "stock">;

// Advantage of interfaces, can include new properties on same operation
interface CreateProductDto extends Pick<Product, "name" | "stock"> {
  categoryId: string;
}

// Result:
interface CreateProductDto {
  name: string;
  stock: number;
  categoryId: string;
}
```

## Partial

Specifies that all the attributes are optional.

```ts
type UpdateProductDto = Partial<Product>;

interface UpdateProductDto extends Partial<Product>;

// Result:
interface UpdateProductDto {
  id?: string | number;
  name?: string;
  stock?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
```

## Required

Specifies that all attributes are required.

```ts
type UpdateProductDto = Required<Product>;

interface UpdateProductDto extends Required<Product>;

// Result:
interface UpdateProductDto {
  id: string | number;
  name: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
```

## Readonly

Specifies that all attributes are readonly.

```ts
type FindProductDto = Readonly<Product>;

interface FindProductDto extends Readonly<Product>;

// Result:
interface FindProductDto {
  readonly id: string | number;
  readonly name: string;
  readonly stock: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
```

## We going Nuts

```ts
interface FindProductDto extends Readonly<Partial<Omit<Product, "id">>>

// Result
interface FindProductDto {
  readonly name?: string;
  readonly stock?: number;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
```
