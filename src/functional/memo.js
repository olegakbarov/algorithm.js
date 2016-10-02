'use strict';

const fibonacci = (() => {
  let memo = {};

  return function f(n) {
    let value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) return n;
      memo[n] = value;
    }

    return value;
  };
})();

console.log(fibonacci(10));
