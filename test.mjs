import { slugify, version } from './index.js';

console.log(slugify('Hello World! This is cool.'));
// Output: "hello-world-this-is-cool"

console.log(version());
// Output: "x.x.x"