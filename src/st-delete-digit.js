import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  n = n
  .toString()
  .split("")
  .map((el) => Number(el));
  let min = Math.min(...n);
  let index = n.indexOf(min);
  n.splice(index, 1);
  return Number(n.join(''));
}

