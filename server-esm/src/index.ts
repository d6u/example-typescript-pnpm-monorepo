import { sayHello } from "hello-esm";
import { run } from "./util.js";
import { getNum } from "../deps/num.js";

console.log(sayHello());
console.log(getNum());

run();
