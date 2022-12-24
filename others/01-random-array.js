/**
 * 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
 */

let arr = new Array(5);

const genRandomNum = () => {
  return Math.floor(Math.random() * 31 + 2);
};

const number = genRandomNum();
let i = 0;

const insertArr = (arr, number) => {
  if (arr.includes(number)) {
    insertArr(arr, genRandomNum());
  }
  if (i !== 5) {
    arr.fill(number, i, i + 1);
    i += 1;
    insertArr(arr, genRandomNum());
  }
  return arr;
};

const res = insertArr(arr, number);
console.log(res);
