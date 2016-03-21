import { Stack } from './stack.js';

/**
 * convert number to base
 * @param  {number} n - a number to convert
 * @param  {number} base - a base to convert to
 * @return {stack}
 */
export function toBase(n, base) {
  let stack = new Stack();

  while (n > 0) {
    stack.add(n % base);
    n = Math.floor(n /= base);
  }

  return stack.toString().replace(/,/g, '');
}

/**
 * factorial of given number using stack
 * @param  {number} n
 * @return {number}
 */
export function factorial(n) {
  let res = 1;
  let stack = new Stack();

  while (n > 0) {
    stack.add(n--);
  }

  while (stack.size() > 0) {
    res *= stack.next();
  }

  return res;
}

/**
 * Validates the number of parens (it should be even) and begin with '('
 * @param  {string} str
 * @return {boolean}
 */
export function parensValidator(str) {
  let stack = new Stack();
  // indicates closing parens
  let flag = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ')' && !flag) {
      return false;
    } else if (str[i] === '(') {
      flag = true;
      stack.add(i);
    } else if (str[i] === ')') {
      stack.next();
    }
  }

  return stack.size() % 2 === 0;
}