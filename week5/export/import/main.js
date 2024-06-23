// Either set the type as module or change the file extension to .mjs
// import xyz, { key as programName, addition } from "./helper.js";

//import every thing from a file
// use *
import * as all from "./helper.js";

console.log(all);
// console.log(xyz);
// console.log(firstName);
let result = all.addition(4, 5);
console.log(result);
