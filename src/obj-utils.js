/**
 * Deeply clones object obj !== cloneObject(obj)
 * @param {Object} obj
 * @return {Object}
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