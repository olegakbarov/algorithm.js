/**
 * Fibseq!
 */

const fibonacci = {
  [Symbol.iterator]: function*() {
    let pre = 0, cur = 1;
    for(;;) {
      let tmp = pre;
      pre = cur;
      cur += tmp;
      yield cur;
    }
  }
}

for (let n of fibonacci) {
  if (n > 1000) {
    break;
  }

  console.log(n)
}

