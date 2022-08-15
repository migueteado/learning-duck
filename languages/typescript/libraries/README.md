# Libraries

When using libraries in a TypeScript project you are going to face 2 scenarios:

### Library has TypeScript Support

In NPM you will usually be able to see an TS icon next to the library name that tells you it has TS support. Modern libraries usually have TS support out of the box.

### Library doesn't have TypeScript Support

There are some libraries out there that don't support TypeScript out of the box or in a external package. But there are still ways to use this kind of libraries on our TS projects.

```js
// This will display a TS error
var _ = require("lodash");

// To ES6 module import
import _ from "lodash";
```

This kind of libraries have TS support but it is on a separated project usually under the @types packages. To use that kind of TS support just install that separated library in your project.

```bash
$ npm install -D @types/lodash
```

It will provide the entire (or partial) TS documentation for that respective library.
