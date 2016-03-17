'use strict';

import {
  // shallowCopy,
  shuffle
} from './arr-utils.js';

import {
  // shallowCopy,
  cloneObject
} from './obj-utils.js';

let obj = {
  stuff: {
    nested: {
      deeper: {
        more: {
          here: '😳'
        }
      }
    }
  }
};

let clone = cloneObject(obj);
obj.stuff = '💩';

console.log(obj);