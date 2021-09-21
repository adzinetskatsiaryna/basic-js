import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return [];
  }
  let result = []

  arr.forEach((item, i,arr)=> {
    if (item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== '--double-prev') {
      result.push(item);

      if (arr[i - 1] === '--discard-next') {
        result.pop()
      }
      if (arr[i - 1] === '--double-next') {
        result.push(item)
      }
      if (arr[i + 1] === '--discard-prev' && arr[i - 1] !== '--discard-next') {
        result.pop()
      }
      if (arr[i + 1] === '--double-prev' && arr[i - 1] !== '--discard-next') {
        result.push(item)
      }
    }
  });

  return result;
}

