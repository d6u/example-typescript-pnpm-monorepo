## Workspace Commands

Add workspace package as a dependency of a package

```sh
pnpm --workspace -F scripts-cjs add -D hello-esm
```

- `--workspace` search the package in workspace, instead of npm registry.
- `-F` apply the command to all packages that satisfy the filter.
- `-D` dev dependency, ignore if you want to add a regular dependency.
