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

In `tsconfig.json`, we used `"module": "node16"`, which config TypeScript and ts-node to emit JavaScript uses either CommonJS or ES2020 output depending on the file extension and the value of the type setting in the nearest `package.json`.

In this package, which is a CommonJS package, thus, the emitted js file will have `require()` calls.

#### Additional Explorations

Add `"require": "./dist/index.cjs"` (assuming the file exists) to the dependency package's `package.json` will work with `require` in .js (or `TS_NODE_TRANSPILE_ONLY=1`), but won't work with TypeScript type checking, because it seems TypeScript doesn't check for "require" conditional exports when the source code is using `import`.

Add `"require": "./dist/index.js"` seems to introduce runtime error, because "require" should point to a CJS file and all .js file is considered ESM if `"type": "module"` is specified in `package.json`.

### `run-import-esm-async.ts`:

```sh
node -r ts-node/register --no-warnings run-import-esm-async.ts
```

Because we are using `import()` as a function, CJS can import ESM. But we cannot use `--conditions=custom` any more, because TypeScript won't transpile imported modules through `import()` and "custom" condition export points to a `.ts` file that node.js runtime won't recognize. We need to load the "default" export instead.
