/**
 * 数组去重，支持多维数组, 不考虑IE
 */

// 多维数组拍扁
function flatten(arr) {
  return arr.flat(Infinity);
}

function uniqArr(arr) {
  return [...new Set(arr.flat(Infinity))];
}

let arr = [1, 2, 3, 4, [3, 4, [4, 6]]];
// let arr = [1, 2, 3, 4, 4];

console.log(uniqArr(arr));
