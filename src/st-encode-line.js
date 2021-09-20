import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else if (counter>1) {
      arr.push(counter + str[i]);
      counter = 1;
    } else {
      arr.push(str[i]);
    }
  }
  return arr.join('');
}
