# Enums

Enums are key-value type data structure. This allow us to create sets of predefined options, avoiding invalud arguments.

```ts
enum Roles {
  Admin = "Admin",
  Seller = "Seller",
  Customer = "Customer",
}

type User = {
  username: string;
  role: Roles;
};

const myUser: User = {
  username: "soymvillalobos",
  role: Roles.Admin,
};
```
