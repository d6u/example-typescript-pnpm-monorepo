// This import will error, because the module is an CJS module,
// which cannot import ESM modules.
import { sayHello } from "hello-esm";

sayHello();
