## `run-import-cjs.ts`:

```sh
node --loader ts-node/esm --no-warnings --conditions=custom run-import-cjs.ts
```

Should fail with runtime error, because "hello-cjs" package contains `export` statement.

Remove `--conditions=custom` will succeed and print "Hello, I'm a CJS", because the default conditional exports is a CJS module. But this requires to build the .ts file in advance.

## `run-import-esm.ts`:

```sh
node --loader ts-node/esm --no-warnings --conditions=custom run-import-esm.ts
```

Should succeed and print "Hello, I'm a ESM".

## `run-import-ts-belt.ts`

```sh
node --loader ts-node/esm --no-warnings --conditions=custom run-import-ts-belt.ts
```

This should fail, because `@mobily/ts-belt` doesn't have `"type": "module"` but export ESM. Thus, TypeScript recognizes its typing but ts-node doesn't.
