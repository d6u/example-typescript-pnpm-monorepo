import { getHello } from "example-source-only";
import { run } from "./util.js";
import { getNum } from "../deps/num.js";

console.log(getHello());
console.log(getNum());

run();
