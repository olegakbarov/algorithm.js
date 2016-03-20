'use strict';

export function cloneObject(obj) {
  /*
   * Deeply clones object.
   * obj !== cloneObject(obj)
   * @param  {Object}
   * @return {Object}
   */
  if (typeof obj !== 'object') throw Error('Not valid object');

  let res = {};

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      res[prop] = obj[prop];
    }
  }

  return res;
}