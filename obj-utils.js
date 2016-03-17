'use strict';

/**
 * ES5 has Object.create(src)
 * ES6 has Object.assign({}, src)
 */
export function cloneObject(obj) {
  if (typeof obj !== 'object') throw Error('Not valid object');

  let res = {};

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      res[prop] = obj[prop];
    }
  }

  return res;
}