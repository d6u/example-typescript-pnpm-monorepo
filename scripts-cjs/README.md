## To Run

### `run-import-cjs.ts`:

```sh
node -r ts-node/register --no-warnings --conditions=custom run-import-cjs.ts
```

Should succeed and print "Hello, I'm a CJS".

### `run-import-esm.ts`:

```sh
node -r ts-node/register --no-warnings --conditions=custom run-import-esm.ts
```

Or

```
TS_NODE_TRANSPILE_ONLY=1 node -r ts-node/register --no-warnings --conditions=custom run-import-esm.ts
```

Should fail with exception for importing ESM in CJS.

### `run-import-esm-async.ts`:

```sh
node -r ts-node/register --no-warnings run-import-esm-async.ts
```

## Explanation

In `tsconfig.json`, we used `"module": "node16"`, which config TypeScript and ts-node to emit JavaScript uses either CommonJS or ES2020 output depending on the file extension and the value of the type setting in the nearest `package.json`.

In this package, which is a CommonJS package, thus, the emitted js file will have `require()` calls.

Because of this reason, `run-import-esm.ts` will fail
