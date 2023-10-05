function curry (fn) {
  // Your code here:
const args = [];

const argsNum = fn.length;

return function curried(arg) {
  if (args.length !== argsNum) {
    return args.push(arg);
  } else {
  fn(...args);
  }
}
}

module.exports = curry
