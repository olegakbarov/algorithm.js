/* eslint-disable max-statements */
import test from 'tape';
import { Stack } from '../src/stack/stack.js';
import {
  toBase,
  factorial,
  parensValidator
} from '../src/stack/examples.js';

test('[stack] methods & examples', assert => {
  let stack = new Stack();
  let msg = 'empty when created';
  assert.notOk(stack.next(), msg);

  stack.add('item');
  msg = 'has item after it been added';
  assert.equal(stack.next(), 'item', msg);

  msg = 'has no items after the last item been next()-ed';
  assert.notOk(stack.next(), msg);

  stack.add('first');
  stack.add('second');
  stack.add('third');
  msg = 'cant acess store outside of stack';
  assert.notOk(stack.store, msg);

  msg = 'size of stack is correct';
  assert.equals(stack.size(), 3, msg);

  msg = 'peek returns top-most item without removing it';
  assert.equals(stack.peek(), 'third', msg);
  assert.equals(stack.next(), 'third', msg);

  msg = 'example correctly converts number to base';
  let number = 33, base = 2;
  let res = toBase(number, base);
  assert.equals(res.toString(), '100001', msg);

  // TODO
  // number = 125, base = 8;
  // res = toBase(number, base);
  // assert.equals(res.toString(), '175', msg);

  msg = 'factorial example works correctly';
  assert.equals(factorial(5), 120, msg);

  msg = 'a valid LISP';
  let lisp = '(defn fib [n] (if (= n 1) 1 (fac (- n 1))))';
  assert.ok(parensValidator(lisp), msg);

  msg = ' not a valid LISP';
  lisp = ')defn fib [n] (if (= n 1) 1 (fac (- n 1))))';
  assert.notOk(parensValidator(lisp), msg);

  // msg = ' not a valid LISP again';
  // lisp = '(defn fib [n] (if (= n 1) 1 (fac (- n 1))';
  // assert.notOk(parensValidator(lisp), msg);
  assert.end();
});
