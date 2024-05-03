This is an additiional exploration for [scripts-cjs](../scripts-cjs). The difference is in tsconfig.json, we used:

```
"module": "none",
"moduleResolution": "node"
```

Instead of

```
"module": "node16",
"moduleResolution": "node16"
```

## `run-import-esm.ts`:

However, `import { sayHello } from "hello-esm";` still won't work with TypeScript type checking. Unless we add `"types": "./src/index.ts"` to the root of the `package.json` of `hello-esm`. Although, we already have `"types": "./src/index.ts"` in the conditional exports of `hello-esm`, TypeScript is have trouble finding it.

### `ts-node` usage

`ts-node` still won't work.

But we can make it work with a few modication.

1. In `hello-esm`, change `"default": "./dist/index.js"` to `./dist/index.cjs`, or add `"require": "./dist/index.cjs"`.
2. Add `TS_NODE_TRANSPILE_ONLY=1` and remove ` --conditions=custom` from the command.

```
TS_NODE_TRANSPILE_ONLY=1 node -r ts-node/register --no-warnings run-import-esm.ts
```
