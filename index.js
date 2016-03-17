'use strict';

import {
  // shallowCopy,
  shuffle
} from './arr-utils.js';

let a = ['one', 'two', 'three', 'four', 'six', 'seven'];

let res = shuffle(a);

console.log(res);